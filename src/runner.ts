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

import { _throw, runWorker } from './helpers'
import { BooleanExpression, NumericExpression, Statement } from './program'
import { RunnerInput, RunnerOutput } from './workers'

runWorker<RunnerInput, RunnerOutput>(({ program, state }) => {
  const evalNumeric = (expression: NumericExpression): number => {
    switch (expression.type) {
      case 'n': return expression.value
      case 'var': return state[expression.name] ?? _throw(new TypeError(`Variable "${expression.name}" not defined.`))
      case '+': return evalNumeric(expression.left) + evalNumeric(expression.right)
      case '-':return evalNumeric(expression.left) - evalNumeric(expression.right)
      case '*': return evalNumeric(expression.left) * evalNumeric(expression.right)
      case '/': return Math.trunc(evalNumeric(expression.left) / evalNumeric(expression.right))
    }
  }

  const evalBoolean = (expression: BooleanExpression): boolean => {
    switch (expression.type) {
      case 'true': return true
      case 'false': return false
      case 'not': return !evalBoolean(expression.value)
      case '<': return evalNumeric(expression.left) < evalNumeric(expression.right)
      case '>': return evalNumeric(expression.left) > evalNumeric(expression.right)
      case '<=': return evalNumeric(expression.left) <= evalNumeric(expression.right)
      case '>=': return evalNumeric(expression.left) >= evalNumeric(expression.right)
      case '==': return evalNumeric(expression.left) === evalNumeric(expression.right)
      case '!=': return evalNumeric(expression.left) !== evalNumeric(expression.right)
      case 'or': return evalBoolean(expression.left) || evalBoolean(expression.right)
      case 'and': return evalBoolean(expression.left) && evalBoolean(expression.right)
    }
  }

  const run = (statement: Statement): void => {
    switch (statement.type) {
      case 'skip':
        break
      case 'assign':
        state = { ...state, [statement.variable]: evalNumeric(statement.expression) }
        break
      case 'if':
        if (evalBoolean(statement.condition)) {
          run(statement.ifBody)
        } else {
          run(statement.elseBody)
        }
        break
      case 'while':
        while (evalBoolean(statement.condition)) {
          run(statement.body)
        }
        break
      case 'seq':
        statement.statements.forEach(run)
        break
    }
  }

  run(program)
  return { state }
})
