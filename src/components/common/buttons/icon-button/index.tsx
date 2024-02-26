import classNames from 'classnames/bind'
import { JSX, forwardRef } from 'react'
import Icon, { IconProps } from '~/components/common/icon'
import styles from './icon-button.module.scss'

const cx = classNames.bind(styles)

type IconButtonProps = JSX.IntrinsicElements['button'] & {
  icon?: IconProps['name']
  iconOptions?: Omit<IconProps, 'name'>
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, icon, iconOptions, children, ...props }, ref) => {
    return (
      <button className={cx('btn', className)} ref={ref} {...props}>
        {icon ? <Icon name={icon} {...iconOptions} /> : children}
      </button>
    )
  }
)

export default IconButton
