import { PropsWithChildren } from 'react'
import DeviceProvider from './device-provider'
import ReduxProvider from './redux-provider'

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider>
      <DeviceProvider>{children}</DeviceProvider>
    </ReduxProvider>
  )
}

export default Providers
