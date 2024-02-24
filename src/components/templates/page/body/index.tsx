import { JSX } from 'react'

import classNames from 'classnames/bind'
import styles from './body.module.scss'

const cx = classNames.bind(styles)

type PageBodyProps = JSX.IntrinsicElements['div']

const PageBody = ({ className, ...props }: PageBodyProps) => {
  return <div className={cx('container', className)} {...props} />
}

export default PageBody
