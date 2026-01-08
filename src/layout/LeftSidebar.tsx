import { ArrowBigLeftDashIcon, ArrowBigRightDash } from 'lucide-react'
import React from 'react'

interface LeftSidebarProps {
  isOpen: boolean,
  toggle: () => void
}

export default function LeftSidebar({isOpen, toggle}:LeftSidebarProps) {
  return (
    <aside className={`text-[var(--color-text-primary)] h-full 
    bg-[var(--color-bg-alt)] 
    shadow-lg p-4 rounded-r-lg
    transition-all duration-300 ${isOpen ? 'w-[220px]' : 'w-[50px]'} overflow-hidden`}>
      {isOpen ? (
        <>
        <p>LEFT SIDEBAR (FILTERS)</p>
        <button onClick={toggle}><ArrowBigLeftDashIcon stroke="var(--color-accent)" /></button>
        </>
      ) : (
        <button onClick={toggle}><ArrowBigRightDash stroke="var(--color-accent)" /></button>
      )}
    </aside>
  )
}
