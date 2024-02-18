import React from 'react'
import { Layout } from '../components'

type Props = {}

export default function MusicPage(props: Props) {
  const {} = props

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="flex flex-col mb-[64px]">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/5kNPfSAE5Bmkh9F6Q5nTan?utm_source=generator"
            width="750"
            height="750"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}
