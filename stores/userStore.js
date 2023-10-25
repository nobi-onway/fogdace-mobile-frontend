import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const userStore = create(
    persist((set, get) => (
        {
            authentication: null,

            setAuthentication: (authentication) => set({ authentication: authentication })
        }
    ),
        {
            name: "user-storage",
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)