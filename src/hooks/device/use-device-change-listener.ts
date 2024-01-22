import { debounce } from 'lodash'
import { useMemo } from 'react'
import { store } from '~/store'
import { DeviceInfo, getDeviceInfo, getDeviceType } from '~/utils/device'

export const useDeviceChangeListener = (firstTrigger = false) => {
  return useMemo(() => {
    let _callback: (info: DeviceInfo) => void

    const handleWindowResize = debounce(
      () => {
        const device = getDeviceType()
        const currentDevice = store.getState().device.device
        if (device !== currentDevice) {
          if (_callback) {
            _callback(getDeviceInfo(device))
          }
        }
      },
      100,
      { maxWait: 300 }
    )

    return {
      onChange: (callback: (info: DeviceInfo) => void) => {
        _callback = callback
        if (firstTrigger) {
          _callback(getDeviceInfo())
        }

        window.addEventListener('resize', handleWindowResize)
      },
      removeEvent: () => {
        window.removeEventListener('resize', handleWindowResize)
      },
    }
  }, [firstTrigger])
}
