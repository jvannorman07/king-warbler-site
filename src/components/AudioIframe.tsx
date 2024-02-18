import React from 'react'

type Props = {
  src: string
}

export default function AudioIframe(props: Props) {
  const { src } = props

  return (
    <div className="audioframe" {...props}>
      <iframe
        width="100%"
        height="100%"
        // @ts-ignore
        frameborder="no"
        allow="autoplay"
        src={src}
      />
    </div>
  )
}
