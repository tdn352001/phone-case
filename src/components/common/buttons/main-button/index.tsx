import classNames from 'classnames/bind'
import styles from './main-button.module.scss'

const cx = classNames.bind(styles)

type ButtonProps = JSX.IntrinsicElements['button'] & {
  loading?: boolean
  variant?: 'solid' | 'outline'
}

const Button = ({ className, loading, variant = 'solid', children, ...props }: ButtonProps) => {
  return (
    <button className={cx('button', { loading, [variant]: variant }, className)} {...props}>
      <span className={cx('outlet', { loading, [variant]: variant })}>{children}</span>
      {loading && (
        <svg
          className={cx('spinner')}
          xmlns="http://www.w3.org/2000/svg"
          width="2.4rem"
          height="2.4rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />

          <path
            fill="currentColor"
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
          ></path>
        </svg>
      )}
    </button>
  )
}

export default Button
