import { useAppSelector } from '~/hooks/redux'
import { deviceSelector } from '~/slices/device'
import { getDeviceInfo } from '~/utils/device'

export const useDeviceType = () => {
  const device = useAppSelector(deviceSelector.device)

  return getDeviceInfo(device)
}
