import React from 'react'
import styled from 'styled-components'
import { FlexColumn, FlexRow, Box } from '../elements'
import title from '../images/white-band-name.png'
import IconLinkBar from './IconLinkBar'

const Header = (props: any) => {
  return (
    <FlexColumn
      position="relative"
      justifyContent="center"
      alignItems="center"
      px="xxlarge"
      pt="xxlarge"
      {...props}
    >
      <Box mb="medium">
        <img src={title} className="header-title" />
      </Box>
      <FlexRow className="header-link-bar" height="100%" alignItems="center">
        <IconLinkBar />
      </FlexRow>
    </FlexColumn>
  )
}

export default styled(Header)`
  @media only screen and (min-width: 650px) {
    height: 200px;

    .header-link-bar {
      position: absolute;
      top: 0;
      right: 32px;
    }
  }

  @media only screen and (max-width: 650px) {
    margin-bottom: 32px;
  }
`
