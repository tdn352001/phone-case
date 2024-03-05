'use client'
import { redirect } from 'next/navigation'
import Loading from '~/components/common/loading'
import { routers } from '~/configs/routers'
import { LayoutProps } from '~/configs/types'
import { useAppSelector } from '~/hooks/redux'
import { store } from '~/store'
import { authSelector } from '~/store/slices/auth-slice'

const ProtectedRoute = ({ children }: LayoutProps) => {
  const isCheckingAuth = useAppSelector(authSelector.isCheckingAuth)
  const isAuth = store.getState().auth.isAuth

  if (isCheckingAuth) return <Loading message="Loading....!" />

  if (!isAuth && !isCheckingAuth) {
    return redirect(routers.login)
  }

  return children
}

export default ProtectedRoute
