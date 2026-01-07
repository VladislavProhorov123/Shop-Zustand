import React from 'react'
import { useTheme, useToggleTheme } from '../store/theme-store'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const theme = useTheme()
  const toggleTheme = useToggleTheme()
  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>
    </div>
  )
}
