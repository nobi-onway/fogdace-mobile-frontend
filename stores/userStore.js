import { create } from 'zustand'

export const userStore = create(set => ({
    authentication: {},

    setAuthentication: (authentication) => set({ authentication: authentication })
}))