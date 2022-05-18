//@ts-nocheck
const FILTERED_PROPS = [
  'whiteSpace',
  'flexDirection',
  'alignItems',
  'truncate',
  'justifyContent',
  'lineHeight',
  'borderColor',
  'borderRadius',
]

export function filterProps(component) {
  return component.withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
      !FILTERED_PROPS.includes(prop) && defaultValidatorFn(prop),
  })
}
