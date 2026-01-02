import React, { useState } from 'react'
import LeftSidebar from './LeftSidebar'
import ProductsPage from '../products/ProductsPage'
import RightSidebar from './RightSidebar'

export default function MainLayout() {
  const [openSidebarLeft, setOpenSidebarLeft] = useState<'left' | 'right' | null>(null)
  const [openSidebarRight, setOpenSidebarRight] = useState<'left' | 'right' | null>(null)

  const toggleLeft = () => setOpenSidebarLeft(openSidebarLeft === 'left' ? null : 'left')
  const toggleRight = () => setOpenSidebarRight(openSidebarRight === 'right' ? null : "right")
  return (
    <main className="flex flex-1">
      <LeftSidebar isOpen={openSidebarLeft === 'left'} toggle={toggleLeft} />
      <ProductsPage />
      <RightSidebar isOpen={openSidebarRight === 'right'} toggle={toggleRight} />
    </main>
  )
}
