import { configureStore } from '@reduxjs/toolkit'
import authSlice from '~/store/slices/auth-slice'
import deviceSlice from '~/store/slices/device'

export const store = configureStore({
  reducer: {
    [deviceSlice.name]: deviceSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
