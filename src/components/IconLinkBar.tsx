import React from 'react'
import { FlexRow, FlexColumn } from '../elements'
import { MailIcon } from '@heroicons/react/outline'
import spotify from '../images/spotify.svg'

export default function IconLinkBar() {
  return (
    <FlexRow justifyContent="space-between">
      <FlexRow>
        <FlexRow mr="medium">
          <MailIcon color="white" width="28px" />
        </FlexRow>
        <img src={spotify} width="28px" />
      </FlexRow>
    </FlexRow>
  )
}
