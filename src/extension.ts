import * as vscode from 'vscode'
import { getConfig } from './config'
import {
  isIdentifierLine,
  isIdentifierLineWithFocusModifier,
  toggleFocusModifier,
} from './utils'

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'extension.toggleTestOnly',
    () => {
      const editor = vscode.window.activeTextEditor
      const config = getConfig()
      if (!config.valid) {
        vscode.window.showErrorMessage(config.error)
        return
      }
      const { FOCUS_MODIFIER, TEST_IDENTIFIERS } = config.values

      editor?.edit((builder) => {
        let currentIdentifierLine: number | undefined = undefined

        // loop lines above cursor to find line to find current identifier line, toggle `only`
        for (let i = editor.selection.active.line; i > 0; i--) {
          const { text, range, lineNumber } = editor.document.lineAt(i)
          if (
            isIdentifierLine({
              text,
              FOCUS_MODIFIER,
              TEST_IDENTIFIERS,
            })
          ) {
            builder.replace(
              range,
              toggleFocusModifier({ text, FOCUS_MODIFIER, TEST_IDENTIFIERS })
            )
            currentIdentifierLine = lineNumber
            break
          }
        }

        // loop all lines and remove other `only`s if exist
        for (let i = 0; i < editor.document.lineCount; i++) {
          const { text, range, lineNumber } = editor.document.lineAt(i)
          if (
            lineNumber !== currentIdentifierLine &&
            isIdentifierLineWithFocusModifier({
              text,
              FOCUS_MODIFIER,
              TEST_IDENTIFIERS,
            })
          ) {
            builder.replace(
              range,
              toggleFocusModifier({
                text,
                FOCUS_MODIFIER,
                TEST_IDENTIFIERS,
                action: 'off',
              })
            )
          }
        }
      })
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
