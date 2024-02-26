import classNames from 'classnames/bind'
import { JSX } from 'react'
import styles from './title.module.scss'

const cx = classNames.bind(styles)

type HomeSectionTitleProps = JSX.IntrinsicElements['h1'] & {
  as?: 'h1' | 'h2' | 'h3'
}

const HomeSectionTitle = ({ className, as = 'h1', ...props }: HomeSectionTitleProps) => {
  const Container = as

  return <Container className={cx('title', className)} {...props} />
}

export default HomeSectionTitle
