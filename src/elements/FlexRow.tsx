import React from 'react'
import Box from './Box'

const FlexRow = ({ children, ...props }: any) => {
  return (
    <Box display="flex" flexDirection="row" {...props}>
      {children}
    </Box>
  )
}

export default FlexRow
