'use client'

import { PropsWithChildren } from 'react'
import { useDetectDevice } from '~/hooks/device'

const DeviceProvider = ({ children }: PropsWithChildren) => {
  useDetectDevice()
  return children
}

export default DeviceProvider
