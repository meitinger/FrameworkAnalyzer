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

interface NumericConstantExpression {
  readonly type: 'n'
  readonly value: number
}

interface VariableExpression {
  readonly type: 'var'
  readonly name: string
}

interface ArithmenticExpression {
  readonly type: '+' | '-' | '*' | '/'
  readonly left: NumericExpression
  readonly right: NumericExpression
}

export type NumericExpression = NumericConstantExpression | VariableExpression | ArithmenticExpression // export

interface BooleanConstantExpression {
  readonly type: 'true' | 'false'
}

interface NegationExpression {
  readonly type: 'not'
  readonly value: BooleanExpression
}

interface ComparisonExpression {
  readonly type: '<' | '>' | '<=' | '>=' | '==' | '!='
  readonly left: NumericExpression
  readonly right: NumericExpression
}

interface LogicalExpression {
  readonly type: 'or' | 'and'
  readonly left: BooleanExpression
  readonly right: BooleanExpression
}

export type BooleanExpression = BooleanConstantExpression | NegationExpression | ComparisonExpression | LogicalExpression // export

export type Expression = NumericExpression | BooleanExpression // export

interface SkipStatement {
  readonly type: 'skip'
}

interface AssignStatement {
  readonly type: 'assign'
  readonly variable: string
  readonly expression: NumericExpression
}

interface IfStatement {
  readonly type: 'if'
  readonly condition: BooleanExpression
  readonly ifBody: Statement
  readonly elseBody: Statement
}

interface WhileStatement {
  readonly type: 'while'
  readonly condition: BooleanExpression
  readonly body: Statement
}

interface SequenceStatement {
  readonly type: 'seq'
  readonly statements: readonly Statement[]
}

export type LabelledStatement = (SkipStatement | AssignStatement | IfStatement | WhileStatement) & {
  readonly label: number
  readonly line: number
  readonly column: number
} // export

export type Statement = LabelledStatement | SequenceStatement // export
