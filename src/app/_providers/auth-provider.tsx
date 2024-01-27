'use client'

import { useEffect } from 'react'
import { LayoutProps } from '~/configs/types'
import { useAppDispatch } from '~/hooks/redux'
import { tokenManager } from '~/libs/token-manager'
import { authActions } from '~/store/slices/auth-slice'

const AuthProvider = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (tokenManager.initToken()) {
      dispatch(authActions.getUserAccount())
    } else {
      dispatch(
        authActions.setAuthState({
          isCheckedAuth: true,
          isCheckingAuth: false,
          isAuth: false,
        })
      )
    }
  }, [dispatch])

  return children
}

export default AuthProvider
