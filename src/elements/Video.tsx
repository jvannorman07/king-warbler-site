import React from 'react'

type Props = {
  src: string
  title: string
}

export default function Video(props: Props) {
  const { src, title } = props

  return (
    <div className="video" {...props}>
      <iframe
        width="100%"
        height="100%"
        src={src}
        title={title}
        // @ts-ignore
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  )
}
