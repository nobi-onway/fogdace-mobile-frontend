import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const userStore = create(
    persist((set, get) => (
        {
            authentication: null,
            info: null,

            setAuthentication: (authentication) => set({ authentication: authentication }),
            setUserInfo: (info) => set({ info: info }),
        }
    ),
        {
            name: "user-storage",
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)