import classNames from 'classnames/bind'
import { ReactNode } from 'react'
import styles from './container.module.scss'

const cx = classNames.bind(styles)

type PolicyContainerProps = {
  className?: string
  children?: ReactNode
}

const PolicyContainer = ({ className, children }: PolicyContainerProps) => {
  return <main className={cx('container', className)}>{children}</main>
}

export default PolicyContainer
