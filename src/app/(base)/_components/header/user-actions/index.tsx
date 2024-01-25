import classNames from 'classnames/bind'
import Link from 'next/link'
import Icon from '~/components/common/icon'
import { routers } from '~/configs/routers'
import styles from './user-actions.module.scss'

const cx = classNames.bind(styles)

interface UserBarsProps {
  className?: string
}

const UserActions = ({ className }: UserBarsProps) => {
  return (
    <div className={cx('container', className)}>
      <Link className={cx('link')} href={routers.login}>
        <Icon name="UserRound" />
        <span>Login</span>
      </Link>
    </div>
  )
}

export default UserActions
