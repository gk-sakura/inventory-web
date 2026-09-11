import {create} from "zustand"
import {login as loginApi} from '@/services/auth'

type User = {
  id: number
  username: string
}

type AuthState = {
  user: User | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  async login(username, password){
    const result = await loginApi({username, password})
    set({user: result.data.user})
    localStorage.setItem('token', result.data.token)
    localStorage.setItem('user', result.data.user)
  },
  logout() {
    set({user: null})
  }
}))
