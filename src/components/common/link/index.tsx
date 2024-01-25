import classNames from 'classnames/bind'
import NextLink, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import styles from './link.module.scss'

const cx = classNames.bind(styles)

const Link = ({ className, ...props }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <NextLink className={cx('link', className)} {...props} />
}

export default Link
