import { PropsWithChildren } from 'react'
import AuthProvider from './auth-provider'
import DeviceProvider from './device-provider'
import ReduxProvider from './redux-provider'

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider>
      <AuthProvider>
        <DeviceProvider>{children}</DeviceProvider>
      </AuthProvider>
    </ReduxProvider>
  )
}

export default Providers
