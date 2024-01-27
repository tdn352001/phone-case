import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authService } from '~/services/auth-service'
import { User } from '~/services/auth-service/type'
import { RootState } from '~/store'

interface AuthState {
  isCheckingAuth: boolean
  isCheckedAuth: boolean
  isAuth: boolean
  user?: User
}

const initialState: AuthState = {
  isCheckingAuth: true,
  isCheckedAuth: false,
  isAuth: false,
}

const sliceName = 'auth'

const getUserAccount = createAsyncThunk(`${sliceName}/getUserAccount`, async (_, thunkApi) => {
  return authService.getUser().catch((err) => thunkApi.rejectWithValue(err))
})

const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthState>) => {
      state.isAuth = action.payload.isAuth
      state.isCheckedAuth = action.payload.isCheckedAuth
      state.isCheckingAuth = action.payload.isCheckingAuth
      state.user = action.payload.user
    },
    setIsCheckingAuth: (state, action: PayloadAction<boolean>) => {
      state.isCheckingAuth = action.payload
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.isAuth = false
      state.isCheckedAuth = true
      state.isCheckingAuth = false
      state.user = undefined
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAccount.pending, (state) => {
      state.isCheckingAuth = true
    })

    builder.addCase(getUserAccount.fulfilled, (state, action) => {
      state.isCheckingAuth = false
      state.isCheckedAuth = true
      state.isAuth = true
      state.user = action.payload.data
    })

    builder.addCase(getUserAccount.rejected, (state) => {
      state.isCheckingAuth = false
      state.isCheckedAuth = true
      state.isAuth = false
    })
  },
})

export const authActions = {
  ...authSlice.actions,
  getUserAccount,
}

export const authSelector = {
  isAuth: (state: RootState) => state[sliceName].isAuth,
  isCheckedAuth: (state: RootState) => state[sliceName].isCheckedAuth,
  isCheckingAuth: (state: RootState) => state[sliceName].isCheckingAuth,
  user: (state: RootState) => state[sliceName].user,
}

export default authSlice
