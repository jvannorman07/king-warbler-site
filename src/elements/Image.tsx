import React from 'react'

type Props = {
  src: any
  height: string
}

export default function Image(props: Props) {
  const { src, height } = props

  return <img src={src} style={{ maxWidth: '100%', display: 'block', height }} />
}
