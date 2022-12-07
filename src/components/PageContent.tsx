import React from 'react'
import { FlexColumn } from '../elements'

export default function PageContent({ children }: any) {
  return (
    <FlexColumn minWidth="0" px="xgigantic">
      {children}
    </FlexColumn>
  )
}
