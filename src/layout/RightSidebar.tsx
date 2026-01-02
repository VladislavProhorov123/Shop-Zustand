import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react'
import React from 'react'

interface RightSidebarProps {
  isOpen: boolean
  toggle: () => void
}

export default function RightSidebar({isOpen, toggle}:RightSidebarProps) {
  return (
    <aside className={`border-2 border-blue-500 p-4 transition-all duration-300 ${isOpen ? 'w-[360px]' : 'w-[50px]'} overflow-hidden`}>
      {isOpen ? (
        <>
        <button onClick={toggle}><ArrowBigRightDash /></button>
        <p>LEFT SIDEBAR (FILTERS)</p>
        
        </>
      ) : (
        <button onClick={toggle}><ArrowBigLeftDash /></button>
      )}
    </aside>
  )
}
