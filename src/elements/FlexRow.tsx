import React from 'react'
import Box from './Box'

const FlexRow = ({ children, ...props }: any) => {
  console.log(props)
  return (
    <Box display="flex" flexDirection="row" {...props}>
      {children}
    </Box>
  )
}

export default FlexRow
