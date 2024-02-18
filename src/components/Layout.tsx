import React from 'react'
import { IconContext } from 'react-icons'
import Header from './Header'
import PageContent from './PageContent'

export default function Layout(props: any) {
  return (
    <IconContext.Provider value={{ color: 'white', size: '28px' }}>
      <div className="flex flex-col">
        <div>
          <Header />
        </div>
        <PageContent>{props.children}</PageContent>
      </div>
    </IconContext.Provider>
  )
}
