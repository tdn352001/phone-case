import classNames from 'classnames/bind'
import { PropsWithChildren } from 'react'
import styles from './title.module.scss'

const cx = classNames.bind(styles)

const PolicyTitle = ({ children }: PropsWithChildren) => {
  return <h1 className={cx('title')}>{children}</h1>
}

export default PolicyTitle
