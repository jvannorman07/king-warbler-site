//@ts-nocheck
import { css } from 'styled-components'

export const interactive = css`
  ${({ onClick, onPress }) =>
    onClick || onPress
      ? css`
          cursor: pointer;
        `
      : null}

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
          cursor: default;
          pointer-events: none;
        `
      : null}
`

export const print = css`
  ${({ hideWhenPrinting }) =>
    hideWhenPrinting
      ? css`
          @media print {
            display: none;
          }
        `
      : null}

  ${({ printBackground }) =>
    printBackground
      ? css`
          @media print {
            /* webkit and firefox won't print background colors by default. tell them to for this element */
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
        `
      : null}
`

export const itemBase = css`
  white-space: ${({ whiteSpace }) => whiteSpace || 'nowrap'};
  vertical-align: middle;
  transition: all 200ms ease;
  display: inline-flex;
  align-items: center;
  background: none;
  font-family: inherit;
`

export const buttonBase = css`
  ${itemBase};
  ${interactive};
  text-align: center;
  justify-content: center;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  /* silly safari stuff */
  margin: 0;
`
