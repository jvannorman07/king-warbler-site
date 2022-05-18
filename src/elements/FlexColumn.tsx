import React from 'react'
import Box from './Box'

const FlexColumn = ({ children, ...props }: any) => {
  return (
    <Box display="flex" flexDirection="column" {...props}>
      {children}
    </Box>
  )
}

export default FlexColumn
