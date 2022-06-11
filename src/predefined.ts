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

export const predefinedFrameworks = {
  'Available Expressions Analysis': [
    'define<Expression>({',
    '    type: "forward",',
    '    init: expressions,',
    '    extremal: [],',
    '    combine: (l, r) => intersection(l, r),',
    '    compare: (l, r) => isSubset(r, l),',
    '    transfer: (statement, v) => {',
    '        switch (statement.type) {',
    '            case "skip":',
    '                return v',
    '            case "assign":',
    '                return union(',
    '                    difference(',
    '                        v,',
    '                        [...expressions].filter(expression => isElement(statement.variable, freeVariables(expression)))',
    '                    ),',
    '                    [...allExpressions(statement.expression)].filter(expression => !isElement(statement.variable, freeVariables(expression)))',
    '                )',
    '            case "if":',
    '            case "while":',
    '                return union(v, allExpressions(statement.condition))',
    '        }',
    '    },',
    '    format: formatExpression',
    '})',
    ''
  ].join('\r\n'),
  'Reaching Definition Analysis': [
    'define<[string, number]>({',
    '    type: "forward",',
    '    init: [],',
    '    extremal: [...variables].map(variable => unique([variable, 0])),',
    '    combine: (l, r) => union(l, r),',
    '    compare: (l, r) => isSubset(l, r),',
    '    transfer: (statement, v) => {',
    '        if (statement.type === "assign") {',
    '            return [...v].filter(([variable, _]) => variable !== statement.variable).concat([unique([statement.variable, statement.label])])',
    '        } else {',
    '            return v',
    '        }',
    '    },',
    // eslint-disable-next-line no-template-curly-in-string
    '    format: ([variable, label]) => `(${variable},${label === 0 ? "?" : label.toString()})`',
    '})',
    ''
  ].join('\r\n'),
  'Very Busy Expressions Analysis': [
    'define<Expression>({',
    '    type: "backward",',
    '    init: expressions,',
    '    extremal: [],',
    '    combine: (l, r) => intersection(l, r),',
    '    compare: (l, r) => isSubset(r, l),',
    '    transfer: (statement, v) => {',
    '        switch (statement.type) {',
    '            case "skip":',
    '                return v',
    '            case "assign":',
    '                return union(',
    '                    difference(',
    '                        v,',
    '                        [...expressions].filter(expression => isElement(statement.variable, freeVariables(expression)))',
    '                    ),',
    '                    allExpressions(statement.expression)',
    '                )',
    '            case "if":',
    '            case "while":',
    '                return union(v, allExpressions(statement.condition))',
    '        }',
    '    },',
    '    format: formatExpression',
    '})',
    ''
  ].join('\r\n'),
  'Live Variables Analysis': [
    'define<string>({',
    '    type: "backward",',
    '    init: [],',
    '    extremal: [],',
    '    combine: (l, r) => union(l, r),',
    '    compare: (l, r) => isSubset(l, r),',
    '    transfer: (statement, v) => {',
    '        switch (statement.type) {',
    '            case "skip":',
    '                return v',
    '            case "assign":',
    '                return union(difference(v, [statement.variable]), freeVariables(statement.expression))',
    '            case "if":',
    '            case "while":',
    '                return union(v, freeVariables(statement.condition))',
    '        }',
    '    },',
    '    format: s => s',
    '})',
    ''
  ].join('\r\n')
}

export const defaultProgram = [
  'x := a + b',
  'y := a * b',
  'while y > a + b do (',
  '    a := a + 1',
  '    x := x + b',
  ')',
  ''
].join('\r\n')

export const defaultFramework = predefinedFrameworks['Available Expressions Analysis']
