import classNames from 'classnames/bind'
import Icon from '~/components/common/icon'
import styles from './error-message.module.scss'

const cx = classNames.bind(styles)

interface MessageProps {
  className?: string
  show?: boolean
  message?: string
}

const ErrorMessage = ({ className, show = true, message }: MessageProps) => {
  const isShow = show && message
  return (
    <>
      {isShow && (
        <div className={cx('container', className)}>
          <Icon className={cx('icon')} name="Info" size={14} />
          <span className={cx('message')}>{message}</span>
        </div>
      )}
    </>
  )
}

export default ErrorMessage
