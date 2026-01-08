import { ArrowBigLeftDashIcon, ArrowBigRightDash } from 'lucide-react'
import React from 'react'

interface LeftSidebarProps {
  isOpen: boolean,
  toggle: () => void
}

export default function LeftSidebar({isOpen, toggle, brands, selectedBrand, setSelectedBrand}:LeftSidebarProps) {
  return (
    <aside className={`text-[var(--color-text-primary)] h-full 
    bg-[var(--color-bg-alt)] 
    shadow-lg p-4 rounded-r-lg
    transition-all duration-300 ${isOpen ? 'w-[220px]' : 'w-[50px]'} overflow-hidden`}>
      {isOpen ? (
        <>
        <p>LEFT SIDEBAR (FILTERS)</p>
        <button onClick={toggle}><ArrowBigLeftDashIcon stroke="var(--color-accent)" /></button>

        {brands.map((brand) => (
          <label key={brand} className='block cursor-pointer'>
            <input type="radio" name='brand' value={brand} checked={selectedBrand === brand} onChange={() => setSelectedBrand(brand)} />
            {brand}
          </label>
        ))}
        </>
      ) : (
        <button onClick={toggle}><ArrowBigRightDash stroke="var(--color-accent)" /></button>
      )}
    </aside>
  )
}
