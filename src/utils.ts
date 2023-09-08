export const isIdentifierLine = ({
  text,
  FOCUS_MODIFIER,
  TEST_IDENTIFIERS,
}: {
  text: string
  FOCUS_MODIFIER: string
  TEST_IDENTIFIERS: Array<string>
}) =>
  new RegExp(
    `(${TEST_IDENTIFIERS.join('|')})(\\(|\\${FOCUS_MODIFIER}\\()`
  ).test(text)

export const isIdentifierLineWithFocusModifier = ({
  text,
  FOCUS_MODIFIER,
  TEST_IDENTIFIERS,
}: {
  text: string
  FOCUS_MODIFIER: string
  TEST_IDENTIFIERS: Array<string>
}) =>
  new RegExp(`(${TEST_IDENTIFIERS.join('|')})${FOCUS_MODIFIER}\\(`).test(text)

export const toggleFocusModifier = ({
  text,
  FOCUS_MODIFIER,
  TEST_IDENTIFIERS,
  action = 'toggle',
}: {
  text: string
  FOCUS_MODIFIER: string
  TEST_IDENTIFIERS: Array<string>
  action?: 'on' | 'off' | 'toggle'
}) => {
  const toggleOn =
    action === 'toggle' ? !text.includes(FOCUS_MODIFIER) : action === 'on'
  const identifier = TEST_IDENTIFIERS.find((idt) => text.includes(idt))
  const currentText = `${identifier}${toggleOn ? '' : FOCUS_MODIFIER}(`
  const replacement = `${identifier}${toggleOn ? FOCUS_MODIFIER : ''}(`
  return text.replace(currentText, replacement)
}
