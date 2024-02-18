import React from 'react'
import { Video, Anchor } from '../elements'
import { Layout } from '../components'

export default function HomePage() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="flex flex-col mb-[64px]">
          <Video
            src="https://www.youtube.com/embed/XiZ3Xg9GfpQ?si=N0jHUpeBR0cij22z"
            title="Lifestyle"
          />
        </div>
        <div className="flex flex-col mb-[64px]">
          <Video src="https://www.youtube.com/embed/x4T_D-JYyf4" title="Wash Out" />
        </div>
        <div className="flex flex-col mb-[64px]">
          <Video src="https://www.youtube.com/embed/VRVYBwPaZVY" title="Leave You Be" />
        </div>
        <div className="flex mb-[64px]">
          <Anchor href="mailto:kingwarbler@gmail.com">
            <span className="text-xl font-bold">Email us</span>
          </Anchor>
        </div>
      </div>
    </Layout>
  )
}
