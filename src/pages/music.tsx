import React from 'react'
import { Layout, AudioIframe } from '../components'
import { FlexColumn } from '../elements'

type Props = {}

export default function MusicPage(props: Props) {
  const {} = props

  return (
    <Layout>
      <FlexColumn alignItems="center">
        <FlexColumn mb="gigantic">
          <iframe
            style={{ border: 0, width: '350px', height: '786px' }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1771174418/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/"
            seamless
          >
            <a href="https://kingwarbler.bandcamp.com/album/texas-sky">Texas Sky by King Warbler</a>
          </iframe>
        </FlexColumn>
      </FlexColumn>
    </Layout>
  )
}
