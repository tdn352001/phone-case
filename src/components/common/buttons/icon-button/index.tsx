import classNames from 'classnames/bind'
import { JSX, forwardRef } from 'react'
import Icon, { IconProps } from '~/components/common/icon'
import styles from './icon-button.module.scss'

const cx = classNames.bind(styles)

type IconButtonProps = Omit<JSX.IntrinsicElements['button'], 'children'> & {
  icon: IconProps['name']
  iconOptions?: Omit<IconProps, 'name'>
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ className, icon, iconOptions, ...props }, ref) => {
  return (
    <button className={cx('btn', className)} ref={ref} {...props}>
      <Icon name={icon} {...iconOptions} />
    </button>
  )
})

export default IconButton
