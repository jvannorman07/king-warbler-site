// @ts-nocheck
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

export default function Link({ children, ...props }: any) {
  return (
    <GatsbyLink
      to={props.to}
      activeStyle={{ textDecoration: 'underline' }}
      style={{ textDecoration: 'none', color: 'inherit', fontSize: '22px', fontWeight: 'bold' }}
    >
      {children}
    </GatsbyLink>
  )
}
