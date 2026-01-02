import React from 'react'
import Header from './Header'
import MainLayout from './MainLayout'

export default function PageLayout() {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <MainLayout />
    </div>
  )
}
