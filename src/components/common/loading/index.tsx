import classNames from 'classnames/bind'
import Spinner from '~/components/common/spinner'
import styles from './loading.module.scss'

const cx = classNames.bind(styles)

interface LoadingProps {
  className?: string
  message?: string
}

const Loading = ({ className, message }: LoadingProps) => {
  return (
    <div className={cx('container', className)}>
      <Spinner className={cx('spinner')} />
      {message && <p className={cx('message')}>{message}</p>}
    </div>
  )
}

export default Loading
