import React, { useState } from 'react'
import theme from '../theme'
import { ThemeProvider } from 'styled-components'
import { IconContext } from 'react-icons'
import { FlexColumn, Box } from '../elements'
import Header from './Header'
import PageContent from './PageContent'
import './layout.css'

export default function Layout(props: any) {
  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={{ color: 'white', size: '28px' }}>
        <FlexColumn>
          <Header />
          <PageContent>{props.children}</PageContent>
        </FlexColumn>
      </IconContext.Provider>
    </ThemeProvider>
  )
}
