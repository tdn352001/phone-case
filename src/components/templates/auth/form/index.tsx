import { useAutoAnimate } from '@formkit/auto-animate/react'
import classNames from 'classnames/bind'
import { JSX } from 'react'
import styles from './form.module.scss'

const cx = classNames.bind(styles)

type AuthFromProps = JSX.IntrinsicElements['form']

const AuthForm = ({ className, ...props }: AuthFromProps) => {
  const [animationParent] = useAutoAnimate()

  return <form className={cx('container', className)} ref={animationParent} {...props} />
}

export default AuthForm
