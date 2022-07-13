import React from 'react'
import styled from 'styled-components'
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system'
import { print, interactive } from './styles'
import { filterProps } from './utils'

const StyledBox = filterProps(styled.div)`
  ${compose(space, layout, typography, color, flexbox, grid, background, border, position, shadow)}
  ${print}
  ${interactive}
`

const Box = React.forwardRef((props, ref) => <StyledBox {...props} ref={ref} />)

export default Box
