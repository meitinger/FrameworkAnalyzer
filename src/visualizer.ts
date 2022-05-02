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

import { Module, render } from 'viz.js/full.render.js'
import { formatExpression, runWorker } from './helpers'
import { Statement } from './program'
import { VisualizerInput, VisualizerOutput } from './workers'

runWorker<VisualizerInput, VisualizerOutput>(({ program }) => {
  const lines = new Array<string>('node [shape=box];')
  const node = (id: number, label: string): void => { lines.push(`${id} [label="[${label}]${id}"];`) }
  const connect = (to: number, from: number, label?: string): void => { lines.push(`${to} -> ${from}${label === undefined ? '' : ` [label="${label}"]`};`) }
  const walk = (statement: Statement): [number, Array<[number, string?]>] => {
    switch (statement.type) {
      case 'skip':
        node(statement.label, 'skip')
        return [statement.label, [[statement.label]]]
      case 'assign': {
        node(statement.label, `${statement.variable} := ${formatExpression(statement.expression)}`)
        return [statement.label, [[statement.label]]]
      }
      case 'if': {
        node(statement.label, formatExpression(statement.condition))
        const [ifInit, ifFinals] = walk(statement.ifBody)
        const [elseInit, elseFinals] = walk(statement.elseBody)
        connect(statement.label, ifInit, 'yes')
        connect(statement.label, elseInit, 'no')
        return [statement.label, ifFinals.concat(elseFinals)]
      }
      case 'while': {
        node(statement.label, formatExpression(statement.condition))
        const [init, finals] = walk(statement.body)
        connect(statement.label, init, 'yes')
        finals.forEach(([final, label]) => connect(final, statement.label, label))
        return [statement.label, [[statement.label, 'no']]]
      }
      case 'seq': {
        return statement.statements.map(walk).reduce(([previousInit, previousFinals], [currentInit, currentFinals]) => {
          previousFinals.forEach(([final, label]) => connect(final, currentInit, label))
          return [previousInit, currentFinals]
        })
      }
    }
  }
  const [init, finals] = walk(program)
  lines.push(`node [style=invis] ${-init} ${finals.map(([final]) => -final).join(' ')};`)
  connect(-init, init)
  finals.forEach(([final, label]) => connect(final, -final, label))
  return {
    svg: render(((Module as unknown) as () => { run: () => void })(), `digraph MF {${lines.join('')}}`, {
      format: 'svg',
      engine: 'dot',
      files: [],
      images: [],
      yInvert: false
    })
  }
})
