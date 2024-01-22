import { configureStore } from '@reduxjs/toolkit'
import deviceSlice from '~/store/slices/device'

export const store = configureStore({
  reducer: {
    [deviceSlice.name]: deviceSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
