import * as vscode from 'vscode'

type Config =
  | {
      valid: true
      values: {
        FOCUS_MODIFIER: string
        TEST_IDENTIFIERS: Array<string>
      }
    }
  | {
      valid: false
      error: string
    }

export const getConfig = (): Config => {
  const config = vscode.workspace.getConfiguration('toggleTestOnly')
  const FOCUS_MODIFIER = config.get('focusModifier')
  const TEST_IDENTIFIERS = config.get('testIdentifiers')
  if (typeof FOCUS_MODIFIER !== 'string') {
    return {
      valid: false,
      error: 'toggleTestOnly.focusModifier must be of type string',
    }
  }
  if (!Array.isArray(TEST_IDENTIFIERS)) {
    return {
      valid: false,
      error: 'toggleTestOnly.testIdentifiers must be of type array',
    }
  } else if (TEST_IDENTIFIERS.some((idt) => typeof idt !== 'string')) {
    return {
      valid: false,
      error: 'toggleTestOnly.testIdentifiers items must be of type string',
    }
  }

  return {
    valid: true,
    values: {
      FOCUS_MODIFIER,
      TEST_IDENTIFIERS,
    },
  }
}
