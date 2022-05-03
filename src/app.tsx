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

import * as React from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import UIkit from 'uikit'
import { useEditor, useWorker } from './hooks'
import { InlayHintsProvider, languageId } from './language'
import { defaultFramework, defaultProgram, predefinedFrameworks } from './predefined'
import { ParserInput, ParserOutput, RunnerInput, RunnerOutput, SolverInput, SolverOutput, State, VisualizerInput, VisualizerOutput } from './workers'

const parser = (): Worker => new Worker(new URL('./parser.ts', import.meta.url), { type: 'module' })
const solver = (): Worker => new Worker(new URL('./solver.ts', import.meta.url), { type: 'module' })
const runner = (): Worker => new Worker(new URL('./runner.ts', import.meta.url), { type: 'module' })
const visualizer = (): Worker => new Worker(new URL('./visualizer.ts', import.meta.url), { type: 'module' })

const programStoreName = 'program'
const frameworkStoreName = 'framework'
const variableStoreName = (variable: string): string => `variable_${variable}`

export const App: React.FC = () => {
  const gridDiv = useRef<HTMLUListElement>(null)
  const visualizerDiv = useRef<HTMLDivElement>(null)
  const [program, programEditor, programEditorDiv] = useEditor(programStoreName, languageId, defaultProgram)
  const [framework, frameworkEditor, frameworkEditorDiv] = useEditor(frameworkStoreName, 'typescript', defaultFramework)
  const [inputState, setInputState] = useState<State>({})
  const parserInput = useMemo<ParserInput>(() => ({ program }), [program])
  const [parserOutput, parserError] = useWorker<ParserInput, ParserOutput>(parserInput, parser)
  const runnerInput = useMemo<RunnerInput | undefined>(() => parserOutput?.succeeded === true ? { program: parserOutput.program, state: inputState } : undefined, [parserOutput, inputState])
  const [runnerOutput, runnerError] = useWorker<RunnerInput, RunnerOutput>(runnerInput, runner)
  const solverInput = useMemo<SolverInput | undefined>(() => parserOutput?.succeeded === true ? { program: parserOutput.program, variables: parserOutput.variables, framework } : undefined, [parserOutput, framework])
  const [solverOutput, solverError] = useWorker<SolverInput, SolverOutput>(solverInput, solver)
  const visualizerInput = useMemo<VisualizerInput | undefined>(() => parserOutput?.succeeded === true ? { program: parserOutput.program } : undefined, [parserOutput])
  const [visualizerOutput, visualizerError] = useWorker<VisualizerInput, VisualizerOutput>(visualizerInput, visualizer)

  useEffect(() => {
    if (gridDiv.current !== null) {
      (UIkit.update as (e: HTMLElement) => void)(gridDiv.current)
    }
  }, [parserOutput, runnerOutput, solverOutput])

  useEffect(() => setInputState(oldInputState => parserOutput?.succeeded === true
    ? Object.fromEntries(parserOutput.variables.map(variable => [variable, oldInputState[variable] ?? Number.parseInt(window.localStorage.getItem(variableStoreName(variable)) ?? '0')]))
    : oldInputState), [parserOutput])

  const setInputStateVariableValue = (variable: string, value: number): void => {
    window.localStorage.setItem(variableStoreName(variable), value.toString())
    setInputState(prevState => ({ ...prevState, [variable]: value }))
  }

  useEffect(() => {
    const modelId = programEditor.current?.getModel()?.id
    if (modelId !== undefined && parserOutput !== undefined) {
      if (parserOutput.succeeded) {
        InlayHintsProvider.instance.setInlayHints(modelId, parserOutput.inlayHints)
      } else {
        InlayHintsProvider.instance.clearInlayHints(modelId)
      }
    }
    return undefined
  }, [parserOutput, programEditor])

  useEffect(() => {
    const visualizer = visualizerDiv.current
    if (visualizer === null || visualizerOutput === undefined) {
      return
    }
    const graph = new DOMParser().parseFromString(visualizerOutput.svg, 'image/svg+xml').documentElement
    const node = visualizer.appendChild(graph)
    return () => { visualizer.removeChild(node) }
  }, [visualizerOutput])

  return (
    <div className='uk-margin-top uk-margin-left uk-margin-right'>
      <ul ref={gridDiv} className='uk-grid-small uk-child-width-expand@s' data-uk-sortable='handle: .uk-card-header' data-uk-grid='masonry: true'>
        <li className='uk-width-1-2'>
          <div className='uk-card uk-card-default'>
            <div className='uk-card-header'>
              <h3 className='uk-card-title'>
                Program
                <a href='https://github.com/Meitinger/FrameworkAnalyzer/blob/main/README.md' target='_blank' rel='noreferrer' className='uk-align-right uk-margin-remove' title='Syntax'><span data-uk-icon='question' /></a>
              </h3>
            </div>
            <div className='uk-card-body'>
              <div ref={programEditorDiv} className='uk-height-medium' />
            </div>
            {(parserError !== undefined) && <div className='uk-card-footer uk-alert-danger'>{parserError.message}</div>}
            {parserOutput?.succeeded === false && (
              <div className='uk-card-footer uk-alert-warning'>
                Error at line {parserOutput.line}, column {parserOutput.column}. Expected:
                <div>
                  <ul className='uk-list uk-list-collapse uk-list-divider'>
                    {parserOutput.expected.map((value, index) => <li key={index}>{value}</li>)}
                  </ul>
                </div>
              </div>)}
          </div>
        </li>
        <li className='uk-width-1-2'>
          <div className='uk-card uk-card-default'>
            <div className='uk-card-header'>
              <h3 className='uk-card-title'>
                Framework
                <div className='uk-inline uk-align-right uk-margin-remove'>
                  <button type='button' className='uk-button uk-button-primary uk-button-small'>Predefined</button>
                  <div data-uk-dropdown='pos: top-right'>
                    <ul className='uk-nav uk-dropdown-nav uk-list uk-list-divider'>
                      {Object.entries(predefinedFrameworks).map(([name, text]) => (
                        <li key={name}>
                          <button className='uk-button uk-button-link uk-text-capitalize uk-text-nowrap' onClick={() => frameworkEditor.current?.setValue(text)}>{name}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </h3>
            </div>
            <div className='uk-card-body'>
              <div ref={frameworkEditorDiv} className='uk-height-medium' />
            </div>
            {solverError !== undefined && <div className='uk-card-footer uk-alert-danger'>{solverError.message}</div>}
          </div>
        </li>
        <li className='uk-width-1-2'>
          <div className='uk-card uk-card-default'>
            <div className='uk-card-header'>
              <h3 className='uk-card-title'>Variables</h3>
            </div>
            <div className='uk-card-body'>
              <table className='uk-table uk-table-small uk-table-hover uk-table-divider'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Initial State</th>
                    <th>Final State</th>
                  </tr>
                </thead>
                <tbody>
                  {parserOutput?.succeeded === true && parserOutput.variables.map(variable => (
                    <tr key={variable}>
                      <td>{variable}</td>
                      <td><input className='uk-input uk-form-small' type='number' step={1} value={inputState[variable] ?? ''} onChange={e => setInputStateVariableValue(variable, e.target.valueAsNumber)} /></td>
                      <td>{runnerOutput === undefined && runnerError === undefined ? <div data-uk-spinner='ratio: 0.5' /> : runnerOutput?.state[variable]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {runnerError !== undefined && <div className='uk-card-footer uk-alert-danger'>{runnerError.message}</div>}
          </div>
        </li>
        <li className='uk-width-1-2'>
          <div className='uk-card uk-card-default'>
            <div className='uk-card-header'>
              <h3 className='uk-card-title'>Analysis</h3>
            </div>
            <div className='uk-card-body'>
              <table className='uk-table uk-table-small uk-table-hover uk-table-divider'>
                <thead>
                  <tr>
                    <th>Label</th>
                    <th>Entry</th>
                    <th>Exit</th>
                  </tr>
                </thead>
                <tbody>
                  {solverInput !== undefined && solverOutput === undefined && solverError === undefined && (
                    <tr>
                      <td><div data-uk-spinner='ratio: .5' /></td>
                      <td><div data-uk-spinner='ratio: .5' /></td>
                      <td><div data-uk-spinner='ratio: .5' /></td>
                    </tr>
                  )}
                  {solverOutput !== undefined && Object.entries(solverOutput.analysis).map(([label, analysis]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td>{analysis.entry}</td>
                      <td>{analysis.exit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </li>
        <li className='uk-width-1-2'>
          <div className='uk-card uk-card-default'>
            <div className='uk-card-header'>
              <h3 className='uk-card-title'>Flow Graph</h3>
            </div>
            <div ref={visualizerDiv} className='uk-card-body uk-height-large uk-overflow-auto'>
              {visualizerInput !== undefined && visualizerOutput === undefined && visualizerError === undefined && <div className='uk-position-center' data-uk-spinner='ratio: 2' />}
            </div>
            {visualizerError !== undefined && <div className='uk-card-footer uk-alert-danger'>{visualizerError.message}</div>}
          </div>
        </li>
      </ul>
    </div>
  )
}
