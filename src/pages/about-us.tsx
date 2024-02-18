import React from 'react'
import { Layout } from '../components'
import bandPhoto from '../images/fence-somber.png'

const bio = (
  <span>
    King Warbler formed in 2017 with their debut album Rosanky, named after songwriter Jack Van
    Norman’s childhood hometown in east Texas. In the years since, they have been performing in
    Austin and touring, playing a mix of wryly upbeat rock anthems and sincerely plaintive ballads.
    Songs that hold close the ecstatic opposition of joyous tragedy and tragic joy.
    <br />
    <br />
    On January 27th, King Warbler released their second full-length record, Texas Sky, at Captain
    Quackenbush in Austin. Recorded in a dog-filled home in rural Dripping Springs, the songs
    explore the mirrors of love, divorce, friendship, and aging.
  </span>
)

type Props = {}

export default function AboutUs(props: Props) {
  const {} = props

  return (
    <Layout>
      <div className="flex flex-col gap-y-12 items-center">
        <img src={bandPhoto} width="600px" alt="King Warbler" />
        <div className="px-64">{bio}</div>
      </div>
    </Layout>
  )
}
