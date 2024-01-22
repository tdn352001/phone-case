import { useEffect } from 'react'
import { useDeviceChangeListener } from '~/hooks/device'
import { deviceActions } from '~/slices/device'
import { store } from '~/store'

export const useDetectDevice = () => {
  const deviceListener = useDeviceChangeListener(true)

  useEffect(() => {
    deviceListener.onChange(({ device }) => {
      store.dispatch(deviceActions.setDeviceType(device))
    })

    return deviceListener.removeEvent
  }, [deviceListener])
}
