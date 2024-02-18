import React from 'react'
import theme from '../theme'
import { useLocation } from '@reach/router'
import { ThemeProvider } from 'styled-components'
import { IconContext } from 'react-icons'
import { FlexColumn } from '../elements'
import Header from './Header'
import PageContent from './PageContent'
import NavBar from './NavBar'
import './layout.css'

const navTabs = [
  {
    label: 'Home',
  },
  { label: 'Music', route: 'music' },
]

export default function Layout(props: any) {
  const { pathname } = useLocation()

  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={{ color: 'white', size: '28px' }}>
        <FlexColumn>
          <NavBar tabs={navTabs} currentRoute={pathname.replace(/\//g, '')} />
          <Header />
          <PageContent>{props.children}</PageContent>
        </FlexColumn>
      </IconContext.Provider>
    </ThemeProvider>
  )
}
