import classNames from 'classnames/bind'
import { AnimatePresence, motion } from 'framer-motion'
import { useFormContext } from 'react-hook-form'
import styles from './text-field.module.scss'

const cx = classNames.bind(styles)

type TextFieldProps = {
  name: string
  placeholder: string
  showError?: boolean
} & JSX.IntrinsicElements['input']

const TextField = ({
  className,
  placeholder,
  showError = true,
  name,
  onChange,
  onBlur,
  ...props
}: TextFieldProps) => {
  const { register, formState } = useFormContext()

  const errorMessage = formState.errors[name]?.message?.toString()
  const isError = Boolean(errorMessage) && showError

  return (
    <div className={cx('container', className)}>
      <label className={cx('label')}>
        <input
          className={cx('input')}
          placeholder=" "
          {...props}
          {...register(name, { onChange, onBlur })}
        />
        <span className={cx('placeholder')}>{placeholder}</span>
      </label>
      <AnimatePresence>
        {isError && (
          <motion.span
            key="error-message"
            initial={{
              height: '0',
            }}
            animate={{
              height: 'auto',
            }}
            exit={{
              height: '0',
            }}
            className={cx('error-message')}
          >
            <span>{errorMessage}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TextField
