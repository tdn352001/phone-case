import { getCookie, setCookie } from 'cookies-next'
import { JwtPayload, jwtDecode } from 'jwt-decode'
import axiosClient from '~/libs/axios'

export type AiozJwtPayload = JwtPayload & {
  sub: {
    role: string
    user_id: string
  }
}

const KEY = 'token'

class TokenManager {
  private token: string = ''

  initToken() {
    const token = getCookie(KEY) as string
    if (token && this.getExpireDuration(token)) {
      this.saveToken(token)
      return token
    }
  }

  saveToken(token: string) {
    this.token = token
    setCookie(KEY, token)
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  removeToken() {
    this.token = ''
    axiosClient.defaults.headers.common['Authorization'] = ''
  }

  decodeToken(token: string) {
    try {
      const jwtPayload = jwtDecode<AiozJwtPayload>(token)
      jwtPayload.exp = Number(jwtPayload.exp) * 1000
      const expires = jwtPayload.exp - Date.now()
      if (expires > 0) {
        return jwtPayload
      }
    } catch (error) {}
  }

  getExpireDuration(token?: string) {
    const _token = token ?? this.token
    const jwtPayload = this.decodeToken(_token)
    const exp = jwtPayload && jwtPayload.exp ? jwtPayload.exp : 0
    const expires = exp - Date.now()

    return expires > 0 ? expires : 0
  }
}

export const tokenManager = new TokenManager()
