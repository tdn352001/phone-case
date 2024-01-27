'use client'

import { redirect } from 'next/navigation'
import { routers } from '~/configs/routers'
import { LayoutProps } from '~/configs/types'
import { useAppSelector } from '~/hooks/redux'
import { store } from '~/store'
import { authSelector } from '~/store/slices/auth-slice'

const AuthLayout = ({ children }: LayoutProps) => {
  // isCheckingAuth responsible for updating isAuth state
  const isCheckingAuth = useAppSelector(authSelector.isCheckingAuth)
  const isAuth = store.getState().auth.isAuth

  if (isAuth) {
    return redirect(routers.account)
  }

  return children
}

export default AuthLayout
