import React from 'react'
import ProductsHeader from './ProductsHeader'
import ProductsList from './ProductsList'

export default function ProductsPage() {
  return (
    <section className={`flex-1  flex flex-col p-4 `}>
      <ProductsHeader />
      <ProductsList />
    </section>
  )
}
