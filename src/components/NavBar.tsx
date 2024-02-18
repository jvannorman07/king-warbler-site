import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

type Tab = {
  label: string
  route: string
}

type Props = {
  tabs: Tab[]
}

export default function NavBar(props: Props & Record<string, any>) {
  const { tabs } = props

  const { pathname } = useLocation()

  const currentRoute = pathname.replace(/\//g, '')

  return (
    <div className="flex items-center justify-between gap-x-4" {...props}>
      {tabs.map((tab) => {
        const { label, route } = tab

        let linkClass = 'flex flex-col'

        if (currentRoute === route) {
          linkClass = linkClass.concat(` border-b border-white`)
        }

        return (
          <div className={linkClass} key={tab.label}>
            <Link to={`/${route}`} className="text-white text-xl">
              {label}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
