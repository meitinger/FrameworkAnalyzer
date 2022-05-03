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
import { render } from 'react-dom'
import UIkit from 'uikit'
import 'uikit/dist/css/uikit.min.css'
import Icons from 'uikit/dist/js/uikit-icons'
import { App } from './app'
import { registerLanguage, registerLibraries } from './language'

UIkit.use(Icons)

self.MonacoEnvironment = {
  getWorker: (_workerId: string, label: string): Worker => label === 'typescript'
    ? new Worker(new URL('./../node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js', import.meta.url), { type: 'module' })
    : new Worker(new URL('./../node_modules/monaco-editor/esm/vs/editor/editor.worker.js', import.meta.url), { type: 'module' })
}

const alert = (message: string): void => {
  UIkit.modal.alert(message).catch(() => window.alert(message))
}

try { registerLanguage() } catch { alert('Failed to register WHILE language. Code highlighting and completion will not be available.') }
registerLibraries().catch(() => alert('Failed to register type libraries. Framework and helper definitions will not be available.'))

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
