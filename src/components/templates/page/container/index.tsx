import classNames from 'classnames/bind'
import { JSX } from 'react'
import styles from './container.module.scss'

const cx = classNames.bind(styles)

type PageContainerProps = JSX.IntrinsicElements['div'] & {
  as?: 'div' | 'section'
}

const PageContainer = ({ className, as = 'div', ...props }: PageContainerProps) => {
  const Container = as
  return <Container className={cx('container', className)} {...props} />
}

export default PageContainer
