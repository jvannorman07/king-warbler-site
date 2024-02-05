import React from 'react'
import { FlexColumn, FlexRow, Video, Text, Anchor } from '../elements'
import { Layout } from '../components'

export default function HomePage() {
  return (
    <Layout>
      <FlexColumn alignItems="center">
        <FlexColumn mb="gigantic">
          <Video
            src="https://www.youtube.com/embed/XiZ3Xg9GfpQ?si=N0jHUpeBR0cij22z"
            title="Lifestyle"
          />
        </FlexColumn>
        <FlexColumn mb="gigantic">
          <Video src="https://www.youtube.com/embed/x4T_D-JYyf4" title="Wash Out" />
        </FlexColumn>
        <FlexColumn mb="gigantic">
          <Video src="https://www.youtube.com/embed/VRVYBwPaZVY" title="Leave You Be" />
        </FlexColumn>
        <FlexRow mb="gigantic">
          <Anchor href="mailto:kingwarbler@gmail.com">
            <Text fontSize="xlarge" fontWeight="bold">
              Email us
            </Text>
          </Anchor>
        </FlexRow>
      </FlexColumn>
    </Layout>
  )
}
