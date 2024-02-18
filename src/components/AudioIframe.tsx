import React from 'react'
import styled from 'styled-components'

type Props = {
  src: string
}

const AudioIframe = (props: Props) => {
  const { src } = props

  return (
    <div {...props}>
      <iframe
        width="100%"
        height="100%"
        // @ts-ignore
        frameborder="no"
        allow="autoplay"
        src={src}
      ></iframe>
    </div>
  )
}

export default styled(AudioIframe)`
  @media only screen and (min-width: 650px) {
    width: 800px;
    height: 600px;
  }

  @media only screen and (max-width: 650px) {
    width: 350px;
    height: 600px;
  }
`
