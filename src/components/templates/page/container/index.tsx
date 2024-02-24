import classNames from 'classnames/bind'
import { JSX } from 'react'
import styles from './container.module.scss'

const cx = classNames.bind(styles)

type PageContainerProps = JSX.IntrinsicElements['div']

const PageContainer = ({ className, ...props }: PageContainerProps) => {
  return <div className={cx('container', className)} {...props} />
}

export default PageContainer
