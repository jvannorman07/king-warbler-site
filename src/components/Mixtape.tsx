import React from 'react'
import styled from 'styled-components'

const Mixtape = (props: any) => (
  <div {...props}>
    <iframe
      width="100%"
      height="100%"
      // @ts-ignore
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1479496948%3Fsecret_token%3Ds-zcbYvJkvODD&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ></iframe>
  </div>
)

export default styled(Mixtape)`
  @media only screen and (min-width: 650px) {
    width: 800px;
    height: 600px;
  }

  @media only screen and (max-width: 650px) {
    width: 350px;
    height: 600px;
  }
`
