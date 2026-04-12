import api from '../lib/axios'

export interface SignupRequest {
  email: string
  password: string
  nickname: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface TokenResponse {
  accessToken: string
  refreshToken: string
  tokenType: string
  expiresIn: number
}

export const authApi = {
  signup: (data: SignupRequest) =>
    api.post<{ success: boolean; message: string; data: TokenResponse }>('/api/auth/signup', data),

  login: (data: LoginRequest) =>
    api.post<{ success: boolean; message: string; data: TokenResponse }>('/api/auth/login', data),

  refresh: (refreshToken: string) =>
    api.post<{ success: boolean; data: TokenResponse }>('/api/auth/refresh', { refreshToken }),

  logout: () =>
    api.post<{ success: boolean; message: string }>('/api/auth/logout'),
}
