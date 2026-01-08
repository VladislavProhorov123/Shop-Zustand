import React, { useEffect } from "react";
import { useTheme } from "../store/theme-store";

export default function ThemeProvider() {
  const theme = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    )
  }, [theme])

  return null
}
