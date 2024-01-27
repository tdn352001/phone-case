import classNames from 'classnames/bind'
import Link from 'next/link'
import Icon from '~/components/common/icon'
import { routers } from '~/configs/routers'
import { useAppSelector } from '~/hooks/redux'
import { authSelector } from '~/store/slices/auth-slice'
import styles from './user-actions.module.scss'

const cx = classNames.bind(styles)

interface UserBarsProps {
  className?: string
  onCloseNav?: () => void
}

const UserActions = ({ className, onCloseNav }: UserBarsProps) => {
  const user = useAppSelector(authSelector.user)

  return (
    <div className={cx('container', className)}>
      <Link
        className={cx('link')}
        href={user ? routers.account : routers.login}
        onClick={onCloseNav}
      >
        <Icon name="UserRound" />
        <span>{user ? user.email : 'Login'}</span>
      </Link>
    </div>
  )
}

export default UserActions
