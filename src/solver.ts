/*
 * Monotone Framework Analyzer
 * Copyright (C) 2022  Manuel Meitinger
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import * as TS from 'typescript/lib/typescript'
import { Environment } from './environment'
import { Framework } from './framework'
import { _throw, cardinality, difference, formatExpression, intersection, isElement, isEqual, isStrictSubset, isSubset, runWorker, union } from './helpers'
import { Expression, LabelledStatement, Statement } from './program'
import { SolverInput, SolverOutput } from './workers'

interface Label {
  analysis: Iterable<unknown>
  readonly flows: Array<[Label, Label]>
  readonly statement: LabelledStatement
}

runWorker<SolverInput, SolverOutput>(({ program, variables, framework: createFrameworkBody }) => {
  const expressions = new Map<string, Expression>()
  const freeVariablesCache = new Map<Expression, Set<string>>()
  const freeVariables = (expression: Expression): Set<string> => freeVariablesCache.get(expression) ?? _throw(new TypeError(`${formatExpression(expression)} is not in the free variable cache.`))
  const allExpressionsCache = new Map<Expression, Set<Expression>>()
  const allExpressions = (expression: Expression): Set<Expression> => allExpressionsCache.get(expression) ?? _throw(new TypeError(`${formatExpression(expression)} is not in the all expressions cache.`))
  const uniqueExpression = <T extends Expression>(expression: T): T => {
    const key = JSON.stringify(expression)
    const existing = expressions.get(key)
    if (existing === undefined) {
      let created: T
      const freeVariablesSet = new Set<string>()
      const allExpressionsSet = new Set<Expression>()
      const merge = <T extends Expression>(expr: T): T => {
        freeVariables(expr).forEach(variable => freeVariablesSet.add(variable))
        allExpressions(expr).forEach(expression => allExpressionsSet.add(expression))
        return expr
      }
      switch (expression.type) {
        case 'true': case 'false': case 'n':
          created = expression
          break
        case 'var':
          created = expression
          freeVariablesSet.add(expression.name)
          break
        case 'not':
          created = {
            ...expression,
            value: merge(uniqueExpression(expression.value))
          }
          break
        case '+': case '-': case '*': case '/': case '<': case '>': case '<=': case '>=': case '==': case '!=': case 'or': case 'and':
          created = {
            ...expression,
            left: merge(uniqueExpression(expression.left)),
            right: merge(uniqueExpression(expression.right))
          }
          break
      }
      allExpressionsSet.add(created)
      expressions.set(key, created)
      freeVariablesCache.set(created, freeVariablesSet)
      allExpressionsCache.set(created, allExpressionsSet)
      return created
    } else {
      return existing as T
    }
  }
  const flows = new Array<[Label, Label]>()
  const labels = new Map<number, Label>()
  const buildLabel = (statement: LabelledStatement): Label => {
    console.assert(!labels.has(statement.label))
    const label = { analysis: [], flows: [], statement }
    labels.set(statement.label, label)
    return label
  }
  const flowFromStatement = (statement: Statement): readonly [Statement, Label, Label[]] => {
    switch (statement.type) {
      case 'skip': {
        const skip = buildLabel(statement)
        return [skip.statement, skip, [skip]]
      }
      case 'assign': {
        const expression = uniqueExpression(statement.expression)
        const assign = buildLabel({ ...statement, expression })
        return [assign.statement, assign, [assign]]
      }
      case 'if': {
        const condition = uniqueExpression(statement.condition)
        const [ifBody, ifInit, ifFinal] = flowFromStatement(statement.ifBody)
        const [elseBody, elseInit, elseFinal] = flowFromStatement(statement.elseBody)
        const ifElse = buildLabel({ ...statement, condition, ifBody, elseBody })
        flows.push([ifElse, ifInit], [ifElse, elseInit])
        return [ifElse.statement, ifElse, ifFinal.concat(elseFinal)]
      }
      case 'while': {
        const condition = uniqueExpression(statement.condition)
        const [body, bodyInit, bodyFinal] = flowFromStatement(statement.body)
        const whileDo = buildLabel({ ...statement, condition, body })
        flows.push([whileDo, bodyInit])
        bodyFinal.forEach(final => flows.push([final, whileDo]))
        return [whileDo.statement, whileDo, [whileDo]]
      }
      case 'seq':
        return statement.statements.map(flowFromStatement).reduce(([prevStatement, previousInit, previousFinal], [currentStatement, currentInit, currentFinal]) => {
          previousFinal.forEach(final => flows.push([final, currentInit]))
          return [{ ...statement, statements: [prevStatement, currentStatement] }, previousInit, currentFinal]
        })
    }
  }
  const [main, init, final] = flowFromStatement(program)

  const uniqueCache = new Map<string, unknown>(expressions)
  const unique = <T>(v: T): T => {
    const key = JSON.stringify(v)
    if (uniqueCache.has(key)) {
      return uniqueCache.get(key) as T
    } else {
      uniqueCache.set(key, v)
      return v
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let maybeFramework: Framework<any> | undefined
  const environment: Environment = {
    define: <T>(framework: Framework<T>) => { maybeFramework = framework },
    main,
    labels: new Set(labels.keys()),
    variables: new Set(variables),
    expressions: new Set(expressions.values()),
    allExpressions,
    cardinality,
    difference,
    freeVariables,
    intersection,
    isElement,
    isEqual,
    isStrictSubset,
    isSubset,
    union,
    unique,
    formatExpression
  }
  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
  new Function(...Object.keys(environment), TS.transpile(createFrameworkBody, { strict: true, target: TS.ScriptTarget.Latest }))(...Object.values(environment))
  if (maybeFramework === undefined) throw new EvalError('No framework defined, call "define<T>({...})".')
  const framework = maybeFramework
  const isReverse = framework.type === 'backward'

  if (isReverse) {
    flows.forEach(([from, to], index) => { flows[index] = [to, from] })
  }
  for (const flow of flows) {
    const [from] = flow
    from.flows.push(flow)
  }

  const entries = new Set<Label>(isReverse ? final : [init])
  const worklist = new Set<[Label, Label]>(flows)
  labels.forEach(label => { label.analysis = entries.has(label) ? framework.extremal : framework.init })

  for (const flow of worklist) {
    worklist.delete(flow)
    const [from, to] = flow
    const transferred = framework.transfer(from.statement, from.analysis)
    if (!framework.compare(transferred, to.analysis)) {
      to.analysis = framework.combine(to.analysis, transferred)
      to.flows.forEach(flow => worklist.add(flow))
    }
  }

  return ({
    analysis: Object.fromEntries([...labels].map(([number, label]) => {
      const value = [...label.analysis].map(framework.format).join()
      const transferredValue = [...framework.transfer(label.statement, label.analysis)].map(framework.format).join()
      return [number, isReverse
        ? ({
            entry: transferredValue,
            exit: value
          })
        : ({
            entry: value,
            exit: transferredValue
          })
      ]
    }))
  })
})
