import React from 'react'

export default function Anchor({
  children,
  color = 'inherit',
  fontWeight = 'bold',
  ...props
}: any) {
  return (
    <a target="_blank" style={{ textDecoration: 'none', color, fontWeight }} {...props}>
      {children}
    </a>
  )
}
