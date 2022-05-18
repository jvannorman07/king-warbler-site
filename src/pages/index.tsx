import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import HomePage from './HomePage'

export default function index() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  )
}
