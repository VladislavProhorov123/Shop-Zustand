import React from 'react'
import { useFavorites } from '../store/favorite-store'
import { product } from '../data/data'
import ProductCard from '../products/ProductCard'

export default function Favorites() {
  const favorites = useFavorites()

  const favoriteProducts = product.filter((prod) => favorites.some((fav) => fav.id === prod.id))
  return (
    <div>
      <h1 className='flex justify-center mt-5 mb-5 text-[var(--color-text-primary)] text-2xl font-semibold'>Favorites</h1>
      {favoriteProducts.length === 0 ? (
        <p>No favorites yet...</p>
      ) : (
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] items-center ">
          {favoriteProducts.map((prod) => (
            <ProductCard key={prod.id} id={prod.id} title={prod.title} price={prod.price} />
          ))}
        </div>
      )}
    </div>
  )
}
