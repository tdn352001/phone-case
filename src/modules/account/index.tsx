'use client'

import classNames from 'classnames/bind'
import { useRouter } from 'next/navigation'
import TextButton from '~/components/common/buttons/text-button'
import Link from '~/components/common/link'
import { routers } from '~/configs/routers'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { tokenManager } from '~/libs/token-manager'
import { authActions, authSelector } from '~/store/slices/auth-slice'
import styles from './account.module.scss'

const cx = classNames.bind(styles)

const AccountPageContent = () => {
  const user = useAppSelector(authSelector.user)

  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleLogout = () => {
    tokenManager.removeToken()
    dispatch(authActions.logout())
    router.push(routers.login)
  }

  return (
    <div className={cx('container')}>
      <div className={cx('group')}>
        <h1 className={cx('heading-1')}>Account</h1>
        <p className={cx('subtitle')}>
          Welcome back, {user?.first_name} {user?.last_name}
        </p>
        <TextButton className={cx('btn-logout')} icon="User" onClick={handleLogout}>
          Logout
        </TextButton>
      </div>
      <div className={cx('group')}>
        <h2 className={cx('heading-2')}>Order history</h2>
        <p className={cx('desc')}>You haven&apos;t placed any orders yet.</p>
      </div>
      <div className={cx('group')}>
        <h2 className={cx('heading-2')}>Account details</h2>
        <Link href={routers.home}>View addresses (0)</Link>
      </div>
    </div>
  )
}

export default AccountPageContent
