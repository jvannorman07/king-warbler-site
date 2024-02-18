import React from 'react'
import { Link } from 'gatsby'
import FlexRow from '../elements/FlexRow'
import FlexColumn from '../elements/FlexColumn'

type Tab = {
  label: string
  route?: string
}

type Props = {
  tabs: Tab[]
  currentRoute: string
}

export default function NavBar(props: Props & Record<string, any>) {
  const { tabs, currentRoute } = props

  console.log(currentRoute)

  return (
    <FlexRow
      alignItems="center"
      justifyContent="space-between"
      width="15%"
      color="background.0"
      {...props}
    >
      {tabs.map((tab) => {
        const { label, route = '' } = tab

        return (
          <FlexColumn
            key={tab.label}
            borderBottom="solid"
            borderColor={tab.route === currentRoute ? 'background.0' : 'black'}
          >
            <Link
              to={`/${route}`}
              style={{ color: 'white', textDecoration: 'none', fontSize: 'gigantic' }}
            >
              {label}
            </Link>
          </FlexColumn>
        )
      })}
    </FlexRow>
  )
}
