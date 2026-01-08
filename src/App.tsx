import React from 'react'
import PageLayout from './layout/PageLayout'
import ThemeProvider from './layout/ThemeProvider'

export default function App() {
  return (
    <div>
      <ThemeProvider />
      <PageLayout />
      
    </div>
  )
}
