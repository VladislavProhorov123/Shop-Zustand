import React from 'react'
import LeftSidebar from './LeftSidebar'
import ProductsPage from '../products/ProductsPage'
import RightSidebar from './RightSidebar'

export default function MainLayout() {
  return (
    <main className="flex flex-1">
      <LeftSidebar />
      <ProductsPage />
      <RightSidebar />
    </main>
  )
}
