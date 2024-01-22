import { useAppSelector } from '~/hooks/redux'
import { deviceSelector } from '~/store/slices/device'

export const useDesktopScreen = () => {
  return useAppSelector(deviceSelector.isDesktop)
}
