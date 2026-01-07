import React from 'react'
import { useAddFavorite, useFavorites, useToggleFavorite } from '../store/favorite-store'
import { useAddToCart, useCart } from '../store/cart-store'

// Потом заменить на интерфейс с дата джс
interface ProductCardProps {
  id: number
  title: string
  price: number
}

export default function ProductCard({id, title, price}: ProductCardProps) {
  const favorites = useFavorites()
  const toggleFavorite = useToggleFavorite()
  const addToCart = useAddToCart()
  const cart = useCart()

  const isFavorite = favorites.some((fav) => fav.id === id)
  const inCart = cart.some((item) => item.id === id)

  return (
    <div className="flex flex-col justify-between w-[260px] h-[240px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-sm transition hover:shadow-md p-3 cursor-pointer">
      <div className="w-full h-[120px] bg-gray-100 rounded-md mb-3 flex items-center justify-center text-gray-400">
        IMAGE
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[var(--color-text-primary)] font-medium text-lg truncate">{title}</h2>
        <p className='text-[var(--color-text-secondary)] text-sm'>${price}</p>
      </div>
      <div className="flex items-center justify-between mt-2 gap-2">
        <button className="text-[var(--color-accent)] text-xl transition transform hover:scale-110" onClick={() => toggleFavorite({id})}>
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <button className={`flex-1 px-3 py-2 rounded-md font-medium text-white transition-colors duration-200 ${
        inCart ? 'bg-gray-400 cursor-not-allowed' : 'bg-[var(--color-btn-bg)] hover:bg-purple-600'
      }`} onClick={() => addToCart({id, title, price})}>{inCart ? 'In Cart ✅' : 'Add to Cart 🛒'}</button>
      </div>
      
      
    </div>
  )
}
