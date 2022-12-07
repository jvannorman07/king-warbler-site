import React from 'react'
import { FlexColumn, FlexRow, Video, Text, Anchor } from '../elements'
import { Mixtape, Layout } from '../components'

export default function HomePage() {
  return (
    <Layout>
      <FlexColumn alignItems="center">
        <FlexColumn mb="gigantic">
          <Video src="https://www.youtube.com/embed/x4T_D-JYyf4" title="Wash Out" />
        </FlexColumn>
        <FlexColumn mb="gigantic">
          <Video src="https://www.youtube.com/embed/VRVYBwPaZVY" title="Leave You Be" />
        </FlexColumn>
        <FlexColumn mb="gigantic">
          <Mixtape />
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
