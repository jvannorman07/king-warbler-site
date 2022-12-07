import React from 'react'
import styled from 'styled-components'

type Props = {
  src: string
  title: string
}

const Video = (props: Props) => {
  const { src, title } = props

  return (
    <div {...props}>
      <iframe
        width="100%"
        height="100%"
        src={src}
        title={title}
        // @ts-ignore
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default styled(Video)`
  @media only screen and (min-width: 650px) {
    width: 800px;
    height: 450px;
  }

  @media only screen and (max-width: 650px) {
    width: 350px;
    height: 196.875px;
  }
`
