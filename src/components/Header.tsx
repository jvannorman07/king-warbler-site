import React from 'react'
import title from '../images/white-band-name.png'
import IconLinkBar from './IconLinkBar'
import NavBar from './NavBar'

const navTabs = [
  {
    label: 'Home',
    route: '',
  },
  { label: 'Music', route: 'music' },
  // { label: 'Merch', route: 'merch' },
  { label: 'About Us', route: 'about-us' },
]

export default function Header(props: any) {
  return (
    <div className="flex flex-col pt-8 mb-8">
      <div className="flex justify-center mb-1 sm:mb-4">
        <NavBar tabs={navTabs} />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8" {...props}>
        <div className="flex sm:w-1/3" />
        <div className="flex sm:w-1/3 justify-center mb-1 sm:mb-4 sm:mb-0">
          <img src={title} className="header-title" />
        </div>
        <div className="header-link-bar flex sm:w-1/3 justify-end h-full items-center">
          <IconLinkBar />
        </div>
      </div>
    </div>
  )
}
