import { get, post, put } from '~/libs/axios'
import {
  GetUserResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
} from './type'

const login = async (request: LoginRequest) => {
  return post<LoginResponse>('/auth/login', request)
}

const register = async (request: RegisterRequest) => {
  return post<RegisterResponse>('/auth/register', request)
}

const forgotPassword = async (email: string) => {
  return get(`/auth/forgotPassword/${email}`)
}

const resetPassword = async (request: ResetPasswordRequest) => {
  return put('/auth/resetPassword', request)
}

const getUser = async () => {
  return get<GetUserResponse>('/user/me')
}

export const authService = { login, register, forgotPassword, resetPassword, getUser }
