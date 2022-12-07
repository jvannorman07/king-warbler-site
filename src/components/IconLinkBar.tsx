import React from 'react'
import { FlexRow, Anchor } from '../elements'
import { FiMail } from 'react-icons/fi'
import { BsInstagram, BsSpotify } from 'react-icons/bs'

export default function IconLinkBar() {
  return (
    <FlexRow width="140px" justifyContent="space-between" alignItems="center">
      <Anchor href="mailto:kingwarbler@gmail.com">
        <FiMail style={{ color: 'white' }} />
      </Anchor>
      <Anchor href="http://instagram.com/kingwarbler">
        <BsInstagram />
      </Anchor>
      <Anchor href="https://open.spotify.com/artist/6Tmyr4GsLOUKr02giYE0gZ?si=cifu_l6jTCGUsFFCq_-GJA">
        <BsSpotify />
      </Anchor>
    </FlexRow>
  )
}
;``
