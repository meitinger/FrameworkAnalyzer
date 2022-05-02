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

import * as monaco from 'monaco-editor'
import * as React from 'react'
import { useEffect, useReducer, useRef, useState } from 'react'

export const useWorker = <TInput, TOutput>(input: TInput | undefined, builder: () => Worker): [TOutput | undefined, Error | undefined] => {
  const [result, setResult] = useState<TOutput | undefined>(undefined)
  const [error, setError] = useState<Error | undefined>(undefined)
  useEffect(() => {
    const resetState = (): void => {
      setResult(undefined)
      setError(undefined)
    }
    const reportError = (e: Error): void => {
      setResult(undefined)
      setError(e)
    }
    if (input === undefined) {
      resetState()
      return
    }
    let worker: Worker | undefined
    try {
      worker = builder()
      worker.onerror = e => reportError(new Error(e.message))
      worker.onmessageerror = _ => reportError(new Error('Unexpected worker message error.'))
      worker.onmessage = e => {
        setResult(e.data as TOutput)
        setError(undefined)
      }
      worker.postMessage(input)
    } catch (e) {
      reportError(e instanceof Error ? e : new Error(String(e)))
    }
    return () => {
      worker?.terminate()
      resetState()
    }
  }, [input, builder])
  return [result, error]
}

export const usePersistedState = (name: string, initialState: string): [string, React.Dispatch<React.SetStateAction<string>>] => {
  return useReducer<React.Reducer<string, React.SetStateAction<string>>, string>(
    (prevState: string, setState: React.SetStateAction<string>) => {
      const state = typeof setState === 'function' ? setState(prevState) : setState
      window.localStorage.setItem(name, state)
      return state
    },
    initialState,
    (initialState: string) => window.localStorage.getItem(name) ?? initialState
  )
}

export const useEditor = (name: string, language: string, initial: string): [string, React.RefObject<monaco.editor.IStandaloneCodeEditor | undefined>, React.RefObject<HTMLDivElement>] => {
  const [value, setValue] = useState<string>(window.localStorage.getItem(name) ?? initial)
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>()
  const editorDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (editorDivRef.current === null) {
      throw new ReferenceError('Editor DIV reference is not set.')
    }
    const editor = monaco.editor.create(editorDivRef.current, {
      language,
      automaticLayout: true,
      value: window.localStorage.getItem(name) ?? initial
    })
    editorRef.current = editor
    let timeout: number | undefined
    const resetTimeout = (): void => {
      if (timeout !== undefined) {
        clearTimeout(timeout)
        timeout = undefined
      }
    }
    editor.onDidChangeModelContent(_ => {
      resetTimeout()
      timeout = setTimeout(() => {
        timeout = undefined
        const value = editor.getValue({
          preserveBOM: false,
          lineEnding: '\r\n'
        })
        window.localStorage.setItem(name, value)
        setValue(value)
      }, 500)
    })
    return () => {
      resetTimeout()
      editor.dispose()
    }
  }, [name, language, initial])
  return [value, editorRef, editorDivRef]
}
