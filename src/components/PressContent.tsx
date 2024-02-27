import React, { ReactNode } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

type Props = {
  link: string
  pressLogoSrc?: string
  pressLogoAlt?: string
  pressTitle: string
  pressImgSrc: string
  pressText: ReactNode
}

export default function PressContent(props: Props) {
  const { link, pressLogoSrc, pressLogoAlt = '', pressTitle, pressImgSrc, pressText } = props

  return (
    <div className="flex flex-col gap-y-8 items-center">
      <div className="flex justify-between">
        {pressLogoSrc && <StaticImage src={pressLogoSrc} alt={pressLogoAlt} />}
        <span>{pressTitle}</span>
      </div>
      <StaticImage src={pressImgSrc} alt={pressTitle} />
      <span>{pressText}</span>
      <a href={link}>{pressTitle}</a>
    </div>
  )
}
