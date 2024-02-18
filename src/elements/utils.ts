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

export function filterProps(component: any) {
  return null

  return component.withConfig({
    shouldForwardProp: (prop: any, defaultValidatorFn: any) =>
      !FILTERED_PROPS.includes(prop) && defaultValidatorFn(prop),
  })
}
