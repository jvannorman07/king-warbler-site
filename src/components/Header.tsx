import React from 'react'
import { FlexRow, Text } from '../elements'
import title from '../images/white-band-name.png'

export default function Header(props: any) {
  return (
    <FlexRow height="110px" justifyContent="space-between">
      <img src={title} />
      <LinkBar />
    </FlexRow>
  )
}
