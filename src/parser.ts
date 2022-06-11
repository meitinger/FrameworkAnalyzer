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

import * as P from 'parsimmon'
import { runWorker } from './helpers'
import { BooleanExpression, Expression, NumericExpression, Statement } from './program'
import { InlayHint, ParserInput, ParserOutput } from './workers'

runWorker<ParserInput, ParserOutput>(({ program }) => {
  const __ = <T extends string>(...seps: readonly T[]): P.Parser<T> => P.alt(...seps.map(sep => P.string(sep))).trim(P.regexp(/[^\S\n]*/))
  const inner = <T> (arg: readonly [unknown, T, unknown]): T => arg[1]
  const label = 0
  const reserved = new Set(['skip', 'if', 'then', 'else', 'while', 'do', 'not', 'and', 'or', 'true', 'false'])

  const parser = P.createLanguage<{
    separator: string
    variable: string
    program: Statement
    block: Statement
    statement: Statement
    statementSkip: Statement
    statementAssign: Statement
    statementIf: Statement
    statementWhile: Statement
    statementSequence: Statement
    numeric: NumericExpression
    numericLevel1: NumericExpression
    numericLevel2: NumericExpression
    numericLevel3: NumericExpression
    numericConstant: NumericExpression
    numericVariable: NumericExpression
    numericGroup: NumericExpression
    boolean: BooleanExpression
    booleanLevel1: BooleanExpression
    booleanLevel2: BooleanExpression
    booleanLevel3: BooleanExpression
    booleanConstant: BooleanExpression
    booleanComparison: BooleanExpression
    booleanGroup: BooleanExpression
    booleanNegation: BooleanExpression
  }>({
    separator: () => P.regexp(/([^\S\n]*[;\n])+[^\S\n]*/),
    variable: () => P.regexp(/[a-z_]+/).assert(name => !reserved.has(name), 'Reserved keywords cannot be used as variable.'),
    program: r => r.block.trim(P.optWhitespace),
    block: r => P.alt(r.statementSequence, P.seq(__('('), r.statementSequence, __(')')).map(inner)),
    statement: r => P.alt(
      r.statementSkip,
      r.statementAssign,
      r.statementIf,
      r.statementWhile
    ),
    statementSkip: () => P.seq(P.string('skip'), P.index).map(([type, position]) => ({ type, label, ...position })),
    statementAssign: r => P.seq(r.variable, __(':='), r.numeric, P.index).map(([variable, _, expression, position]) => ({ type: 'assign', label, variable, expression, ...position })),
    statementIf: r => P.seq(__('if'), r.boolean, P.index, __('then'), r.block, __('else'), r.block).map(([_if, condition, position, _then, ifBody, _else, elseBody]) => ({ type: 'if', label, condition, ifBody, elseBody, ...position })),
    statementWhile: r => P.seq(__('while'), r.boolean, P.index, __('do'), r.block).map(([_while, condition, position, _do, body]) => ({ type: 'while', label, condition, body, ...position })),
    statementSequence: r => P.sepBy1(r.statement, r.separator.atLeast(1)).trim(r.separator.many()).map(statements => ({ type: 'seq', statements })),
    numeric: r => r.numericLevel1,
    numericLevel1: r => P.seq(r.numericLevel2, P.seq(__('+', '-'), r.numericLevel2).many()).map(([init, expr]) => expr.reduce((left, [type, right]) => ({ type, left, right }), init)),
    numericLevel2: r => P.seq(r.numericLevel3, P.seq(__('*', '/'), r.numericLevel3).many()).map(([init, expr]) => expr.reduce((left, [type, right]) => ({ type, left, right }), init)),
    numericLevel3: r => P.alt(r.numericConstant, r.numericVariable, r.numericGroup),
    numericConstant: () => P.regex(/-?[0-9]+/).map(Number).map(value => ({ type: 'n', value })),
    numericVariable: r => r.variable.map(name => ({ type: 'var', name })),
    numericGroup: r => P.seq(__('('), r.numeric, __(')')).map(inner),
    boolean: r => r.booleanLevel1,
    booleanLevel1: r => P.seq(r.booleanLevel2, P.seq(__('or'), r.booleanLevel2).many()).map(([init, expr]) => expr.reduce((left, [type, right]) => ({ type, left, right }), init)),
    booleanLevel2: r => P.seq(r.booleanLevel3, P.seq(__('and'), r.booleanLevel3).many()).map(([init, expr]) => expr.reduce((left, [type, right]) => ({ type, left, right }), init)),
    booleanLevel3: r => P.alt(r.booleanConstant, r.booleanComparison, r.booleanGroup, r.booleanNegation),
    booleanConstant: () => P.alt(P.string('true'), P.string('false')).map(type => ({ type })),
    booleanComparison: r => P.seq(r.numeric, __('<=', '>=', '==', '!=', '<', '>'), r.numeric).map(([left, type, right]) => ({ type, left, right })),
    booleanGroup: r => P.seq(__('('), r.boolean, __(')')).map(inner),
    booleanNegation: r => P.seq(__('not'), r.boolean).map(([type, value]) => ({ type, value }))
  })

  const parserResult = parser.program.parse(program)
  if (parserResult.status) {
    const inlayHints = new Array<InlayHint>()
    const variables = new Set<string>()
    const findVariables = (expression: Expression): void => {
      switch (expression.type) {
        case 'true': case 'false': case 'n':
          break
        case 'var':
          variables.add(expression.name)
          break
        case 'not':
          findVariables(expression.value)
          break
        case '+': case '-': case '*': case '/': case '<': case '>': case '<=': case '>=': case '==': case '!=': case 'or': case 'and':
          findVariables(expression.right)
          findVariables(expression.left)
          break
      }
    }
    const relabelStatement = (statement: Statement): Statement => {
      if (statement.type === 'seq') {
        return {
          ...statement,
          statements: statement.statements.map(relabelStatement)
        }
      }
      const label = inlayHints.length + 1
      inlayHints.push({
        text: label.toString(),
        position: {
          lineNumber: statement.line,
          column: statement.column
        },
        kind: 0
      })
      switch (statement.type) {
        case 'skip':
          return ({ ...statement, label })
        case 'assign':
          variables.add(statement.variable)
          findVariables(statement.expression)
          return ({ ...statement, label })
        case 'if':
          findVariables(statement.condition)
          return ({
            ...statement,
            label,
            ifBody: relabelStatement(statement.ifBody),
            elseBody: relabelStatement(statement.elseBody)
          })
        case 'while':
          findVariables(statement.condition)
          return ({
            ...statement,
            label,
            body: relabelStatement(statement.body)
          })
      }
    }
    return {
      succeeded: true,
      program: relabelStatement(parserResult.value),
      inlayHints,
      variables: [...variables]
    }
  } else {
    return {
      succeeded: false,
      expected: parserResult.expected,
      ...parserResult.index
    }
  }
})
