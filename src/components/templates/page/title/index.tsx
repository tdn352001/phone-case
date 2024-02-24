import classNames from 'classnames/bind'
import { JSX } from 'react'
import styles from './title.module.scss'

const cx = classNames.bind(styles)

type PageTitleProps = JSX.IntrinsicElements['h1']

const PageTitle = ({ className, ...props }: PageTitleProps) => {
  return <h1 className={cx('title', className)} {...props} />
}

export default PageTitle
