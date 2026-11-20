'use client'

import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IInitialState {
    targetTheme: 'Dark' | 'Light'
}

interface IActions {
    setTargetTheme: (theme: 'Dark' | 'Light') => void
}

interface ITargetTheme extends IInitialState, IActions { }

const initialState: IInitialState = {
    targetTheme: 'Dark'
}

const themeStore: StateCreator<ITargetTheme> = ((set) => ({
    ...initialState,
    setTargetTheme: (theme) => {
        set({ targetTheme: theme })
    }
}))

export const useThemeStore = create<ITargetTheme>()(
    persist(themeStore, {
        name: 'theme-store',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => (
            {
                targetTheme: state.targetTheme
            }
        )
    })
)

export const targetTheme = () => useThemeStore((state) => state.targetTheme)
export const setTargetTheme = (theme: 'Dark' | 'Light') =>
    useThemeStore.getState().setTargetTheme(theme)