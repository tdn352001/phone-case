export type User = {
  id: string
  email: string
  first_name: string
  last_name: string
}

export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  data: {
    access_token: string
    user: User
  }
}

export type RegisterRequest = {
  email: string
  first_name: string
  last_name: string
  password: string
}

export type RegisterResponse = LoginResponse

export type ResetPasswordRequest = {
  email: string
  code: string
  password: string
}

export type GetUserResponse = {
  data: User
}
