import classNames from 'classnames/bind'
import Icon, { IconProps } from '~/components/common/icon'
import styles from './text-button.module.scss'

const cx = classNames.bind(styles)

type ButtonProps = JSX.IntrinsicElements['button'] & {
  icon?: IconProps['name']
  iconOptions?: Omit<IconProps, 'name'>
}

const TextButton = ({ className, icon, iconOptions = {}, children, ...props }: ButtonProps) => {
  return (
    <button className={cx('button', className)} {...props}>
      {icon && <Icon className={cx('icon')} name={icon} {...iconOptions} />}
      <span className={cx('outlet')}>{children}</span>
    </button>
  )
}

export default TextButton
