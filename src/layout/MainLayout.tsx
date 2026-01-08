import React, { useState } from 'react'
import LeftSidebar from './LeftSidebar'
import ProductsPage from '../products/ProductsPage'
import RightSidebar from './RightSidebar'

export default function MainLayout() {
  const [openSidebarLeft, setOpenSidebarLeft] = useState<'left' | 'right' | null>(null)
  const [openSidebarRight, setOpenSidebarRight] = useState<'left' | 'right' | null>(null)

  const [selectedBrand, setSelectedBrand] = useState<string | null>('All')
  const [minPrice, setMinPrice] = useState<number | null>(null)
  const [maxPrice, setMaxPrice] = useState<number | null>(null)
  const [minRating, setMinRating] = useState<number | null>(null)
  const [inStockOnly, setInStockOnly] = useState<boolean>(false)

  const brands = ['All', 'Nike', 'Adidas', 'Puma']

  const toggleLeft = () => setOpenSidebarLeft(openSidebarLeft === 'left' ? null : 'left')
  const toggleRight = () => setOpenSidebarRight(openSidebarRight === 'right' ? null : "right")
  return (
    <main className="flex flex-1">
      <LeftSidebar selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} brands={brands} isOpen={openSidebarLeft === 'left'} toggle={toggleLeft} />
      <ProductsPage />
      <RightSidebar isOpen={openSidebarRight === 'right'} toggle={toggleRight} />
    </main>
  )
}
