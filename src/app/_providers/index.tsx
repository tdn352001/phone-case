import { PropsWithChildren } from 'react'
import ReduxProvider from './redux-provider'

const Providers = ({ children }: PropsWithChildren) => {
  return <ReduxProvider>{children}</ReduxProvider>
}

export default Providers
