import { MOBILE_WIDTH, TABLET_WIDTH } from '~/configs/constants'
import { DeviceType } from '~/slices/device'

export const getDeviceType = (defaultDevice = DeviceType.MOBILE) => {
  if (!window) {
    return defaultDevice
  }

  const windowWidth = window.innerWidth

  if (windowWidth <= MOBILE_WIDTH) {
    return DeviceType.MOBILE
  }

  if (windowWidth <= TABLET_WIDTH) {
    return DeviceType.TABLET
  }

  return DeviceType.DESKTOP
}
