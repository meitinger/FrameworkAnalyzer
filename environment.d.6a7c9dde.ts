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

import { Framework } from './framework'
import { Expression, Statement } from './program'

export interface Environment {
  readonly define: <T>(framework: Framework<T>) => void
  readonly main: Statement
  readonly labels: Iterable<number>
  readonly variables: Iterable<string>
  readonly expressions: Iterable<Expression>
  readonly allExpressions: (expression: Expression) => Iterable<Expression>
  readonly cardinality: <T>(s: Iterable<T>) => number
  readonly difference: <T>(a: Iterable<T>, b: Iterable<T>) => Iterable<T>
  readonly freeVariables: (expression: Expression) => Iterable<string>
  readonly intersection: <T>(a: Iterable<T>, b: Iterable<T>) => Iterable<T>
  readonly isElement: <T>(e: T, s: Iterable<T>) => boolean
  readonly isEqual: <T>(a: Iterable<T>, b: Iterable<T>) => boolean
  readonly isStrictSubset: <T>(a: Iterable<T>, b: Iterable<T>) => boolean
  readonly isSubset: <T>(a: Iterable<T>, b: Iterable<T>) => boolean
  readonly union: <T>(a: Iterable<T>, b: Iterable<T>) => Iterable<T>
  readonly unique: <T>(v: T) => T
  readonly formatExpression: (expression: Expression) => string
}
