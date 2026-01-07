import { create, type StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type Theme = 'light' | 'dark';


interface IThemeInitialState {
  theme: Theme
}

interface IThemeActions {
  toggleTheme: () => void
}

interface IThemeState extends IThemeInitialState, IThemeActions {}

const themeStore: StateCreator<IThemeState> = (set) => ({
  theme: 'light',
  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light'
    }))
  }
});

export const useThemeStore = create<IThemeState>()(
  devtools(
    persist(
      themeStore,
      {
        name: 'theme-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ theme: state.theme })
      }
    )
  )
)

export const useTheme = () => useThemeStore((state) => state.theme)
export const useToggleTheme = () => useThemeStore((state) => state.toggleTheme);