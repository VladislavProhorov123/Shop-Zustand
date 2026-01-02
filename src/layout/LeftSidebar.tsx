import { ArrowBigLeftDashIcon, ArrowBigRightDash } from 'lucide-react'
import React from 'react'

interface LeftSidebarProps {
  isOpen: boolean,
  toggle: () => void
}

export default function LeftSidebar({isOpen, toggle}:LeftSidebarProps) {
  return (
    <aside className={`border-2 border-blue-500 p-4 transition-all duration-300 ${isOpen ? 'w-[220px]' : 'w-[50px]'} overflow-hidden`}>
      {isOpen ? (
        <>
        <p>LEFT SIDEBAR (FILTERS)</p>
        <button onClick={toggle}><ArrowBigLeftDashIcon /></button>
        </>
      ) : (
        <button onClick={toggle}><ArrowBigRightDash /></button>
      )}
    </aside>
  )
}
