import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsList() {
  return (
    <div className='flex flex-wrap gap-7 '>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}
