import { useAppSelector } from '~/hooks/redux'
import { deviceSelector } from '~/store/slices/device'

export const useMobileScreen = () => {
  return useAppSelector(deviceSelector.isMobile)
}
