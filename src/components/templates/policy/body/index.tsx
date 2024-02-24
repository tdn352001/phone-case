import classNames from 'classnames/bind'
import { ReactNode } from 'react'
import styles from './body.module.scss'

const cx = classNames.bind(styles)

type PolicyBodyProps = {
  children: ReactNode
}

const PolicyBody = ({ children }: PolicyBodyProps) => {
  return <div className={cx('container')}>{children}</div>
}

export default PolicyBody
