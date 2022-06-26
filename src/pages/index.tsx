import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import HomePage from './HomePage'
import { Layout } from '../components'

export default function index() {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </Layout>
  )
}
