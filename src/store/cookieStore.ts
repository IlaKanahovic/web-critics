'use client'

import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IInitialState {
    hasConsent: boolean
}

interface IActions {
    acceptConsent: () => void
}

interface ICookieState extends IInitialState, IActions { }

const initialState: IInitialState = {
    hasConsent: false
}

const cookieStore: StateCreator<ICookieState> = ((set) => ({
    ...initialState,
    acceptConsent: () => {
        set({ hasConsent: true })
    }
}))

export const useCookieStore = create<ICookieState>()(
    persist(cookieStore, {
        name: 'cookie-consent-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => (
            {
                hasConsent: state.hasConsent
            }
        )
    })
)

export const hasConsent = () => useCookieStore((state) => state.hasConsent)

export const acceptConsent = () =>
    useCookieStore.getState().acceptConsent()