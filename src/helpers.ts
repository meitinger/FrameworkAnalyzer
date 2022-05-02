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

import { Expression } from './program'

export const _throw = <T> (e: Error): Exclude<T, undefined> => { throw e }

export const runWorker = <TInput, TOutput>(worker: (input: TInput) => TOutput): void => {
  onmessage = e => postMessage(worker(e.data as TInput))
}

const asSet = <T>(values: Iterable<T>): Set<T> => {
  return values instanceof Set ? values as Set<T> : new Set<T>(values)
}

export const cardinality = <T>(s: Iterable<T>): number => asSet(s).size

export const difference = <T> (a: Iterable<T>, b: Iterable<T>): Iterable<T> => {
  const result = new Set<T>(a)
  for (const value of b) {
    result.delete(value)
  }
  return result
}

export const intersection = <T> (a: Iterable<T>, b: Iterable<T>): Iterable<T> => {
  const result = new Set<T>()
  const setA = asSet(a)
  const setB = asSet(b)
  for (const value of setB) {
    if (setA.has(value)) {
      result.add(value)
    }
  }
  return result
}

export const isElement = <T> (e: T, s: Iterable<T>): boolean => Array.isArray(s) ? s.includes(e) : asSet(s).has(e)

const internalIsSubset = <T>(setA: Set<T>, setB: Set<T>): boolean => {
  if (setA.size > setB.size) {
    return false
  }
  for (const key of setA) {
    if (!setB.has(key)) {
      return false
    }
  }
  return true
}

export const isEqual = <T> (a: Iterable<T>, b: Iterable<T>): boolean => {
  const setA = asSet(a)
  const setB = asSet(b)
  return setA.size === setB.size && internalIsSubset(setA, setB)
}

export const isStrictSubset = <T> (a: Iterable<T>, b: Iterable<T>): boolean => {
  const setA = asSet(a)
  const setB = asSet(b)
  return setA.size !== setB.size && internalIsSubset(setA, setB)
}

export const isSubset = <T> (a: Iterable<T>, b: Iterable<T>): boolean => internalIsSubset(asSet(a), asSet(b))

export const union = <T> (a: Iterable<T>, b: Iterable<T>): Iterable<T> => {
  const result = new Set<T>(a)
  for (const value of b) {
    result.add(value)
  }
  return result
}

export const formatExpression = (expression: Expression): string => {
  switch (expression.type) {
    case 'true': case 'false':
      return expression.type
    case 'var':
      return expression.name
    case 'not':
      return `(not ${formatExpression(expression.value)})`
    case 'n':
      return expression.value.toString()
    case '+': case '-': case '*': case '/': case '<': case '>': case '<=': case '>=': case '==': case '!=': case 'or': case 'and':
      return `(${formatExpression(expression.left)} ${expression.type} ${formatExpression(expression.right)})`
  }
}
