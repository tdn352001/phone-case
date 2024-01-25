import classNames from 'classnames/bind'
import styles from './heading.module.scss'

const cx = classNames.bind(styles)

interface AuthHeadingProps {
  className?: string
  title: string
  subtitle?: string
}

const AuthHeading = ({ className, title, subtitle }: AuthHeadingProps) => {
  return (
    <div className={cx('container', className)}>
      <h1 className={cx('title')}>{title}</h1>
      {subtitle && <p className={cx('subtitle')}>{subtitle}</p>}
    </div>
  )
}

export default AuthHeading
