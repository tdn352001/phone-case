import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '~/store'

export enum DeviceType {
  MOBILE,
  TABLET,
  DESKTOP,
}

interface DeviceState {
  device: DeviceType
  dirty: boolean
}

const initialState: DeviceState = {
  dirty: false,
  device: DeviceType.MOBILE,
}

const sliceName = 'device'

const deviceSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setDeviceType: (state, action: PayloadAction<DeviceType>) => {
      state.device = action.payload
      state.dirty = true
    },
  },
})

export const deviceActions = deviceSlice.actions

export const deviceSelector = {
  device: (state: RootState) => state[sliceName].device,
  isMobile: (state: RootState) => state[sliceName].device === DeviceType.MOBILE,
  isDesktop: (state: RootState) => state[sliceName].device === DeviceType.DESKTOP,
}

export default deviceSlice
