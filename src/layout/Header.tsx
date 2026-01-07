import { Moon, Sun } from 'lucide-react'
import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3">
      <h1 className='text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]'>Flux<span className='text-[var(--color-accent)] font-bold'>.</span>Shop</h1>

      <ThemeToggle />
    </header>
  )
}
