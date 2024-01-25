import classNames from 'classnames/bind'
import { JSX } from 'react'
import styles from './container.module.scss'

const cx = classNames.bind(styles)

type AuthContainerProps = JSX.IntrinsicElements['div']

const AuthContainer = ({ className, ...props }: AuthContainerProps) => {
  return <div className={cx('container', className)} {...props} />
}

export default AuthContainer
