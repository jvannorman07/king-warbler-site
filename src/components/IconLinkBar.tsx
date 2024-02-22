import React from 'react'
import { Anchor } from '../elements'
import { FiMail } from 'react-icons/fi'
import { BsInstagram, BsSpotify } from 'react-icons/bs'

export default function IconLinkBar() {
  return (
    <div className="flex w-[140px] justify-between items-center gap-x-2 sm:gap-x-0">
      <Anchor href="mailto:kingwarbler@gmail.com">
        <FiMail style={{ color: 'white' }} />
      </Anchor>
      <Anchor href="http://instagram.com/kingwarbler">
        <BsInstagram />
      </Anchor>
      <Anchor href="https://open.spotify.com/artist/6Tmyr4GsLOUKr02giYE0gZ?si=cifu_l6jTCGUsFFCq_-GJA">
        <BsSpotify />
      </Anchor>
    </div>
  )
}
;``
