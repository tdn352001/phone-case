import { DeviceType } from '~/slices/device'
import { getDeviceType } from '~/utils/device/get-device-type'

export const getDeviceInfo = (device?: DeviceType) => {
  let _device = device ?? getDeviceType()

  return {
    device: _device,
    isMobile: device === DeviceType.MOBILE,
    isTablet: device === DeviceType.TABLET,
    isDesktop: device === DeviceType.DESKTOP,
  }
}

export type DeviceInfo = ReturnType<typeof getDeviceInfo>
