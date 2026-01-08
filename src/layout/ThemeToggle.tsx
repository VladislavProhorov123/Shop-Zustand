import React from "react";
import { useTheme, useToggleTheme } from "../store/theme-store";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  return (
    <div className="border bg-[var(--color-bg-alt)] w-16 h-8 relative rounded-2xl flex items-center ">
      <button
        onClick={toggleTheme}
        className="w-5 h-5 flex items-center justify-center"
        style={{
          transform: theme === "light" ? "translateX(10%)" : "translateX(155%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {theme === "light" ? (
          <Moon className="text-[var(--color-icon-primary)]" />
        ) : (
          <Sun className="text-[var(--color-icon-primary)]" fill="#cdd40d" />
        )}
      </button>
    </div>
  );
}
