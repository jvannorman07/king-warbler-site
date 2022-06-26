import styled from 'styled-components'
import { compose, space, typography, color, layout, flexbox, border } from 'styled-system'
import { filterProps } from './utils'

const Text = filterProps(styled.div)`

  ${({ truncate }: any) =>
    truncate
      ? `
max-width: 100%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;`
      : null}

  ${({ whiteSpace }: any) => (whiteSpace ? `white-space: ${whiteSpace}` : '')};
  ${({ textTransform }: any) => (textTransform ? `text-transform: ${textTransform}` : '')};

  ${compose(color, flexbox, layout, space, typography, border)}

`

Text.defaultProps = {
  fontSize: 'medium',
  lineHeight: 'medium',
  color: 'foreground.0',
  truncate: false,
}

export default Text
