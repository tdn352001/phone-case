import classNames from 'classnames/bind'
import { AnimatePresence, motion } from 'framer-motion'
import lodash from 'lodash'
import { useMemo, useRef, useState } from 'react'
import Icon from '~/components/common/icon'
import { useOnClickOutside } from '~/hooks/ui'
import styles from './select.module.scss'

const cx = classNames.bind(styles)

export type SelectItem<T = string> = {
  value: T
  label: string
}

type SelectProps<T = string> = {
  className?: string
  label?: string
  placeholder?: string
  value?: T
  options: SelectItem<T>[]
  onChange?: (item: T) => void
}

const Select = <T = string,>({
  className,
  label,
  placeholder,
  value,
  options,
  onChange,
}: SelectProps<T>) => {
  const [open, setOpen] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  const selectedItem = useMemo(() => {
    return options.find((item) => lodash.isEqual(item.value, value))
  }, [options, value])

  useOnClickOutside(
    mainRef,
    () => {
      setOpen(false)
    },
    { condition: open }
  )

  return (
    <div className={cx('container', className)}>
      {label && <p className={cx('label')}>{label}</p>}
      <div className={cx('main')} ref={mainRef}>
        <button
          className={cx('button', { active: open })}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <span>{selectedItem ? selectedItem.label : placeholder}</span>
          <Icon name="ChevronDown" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={cx('options')}
            >
              {options.map((item, index) => (
                <button
                  key={index}
                  className={cx('button-options')}
                  onClick={() => {
                    onChange?.(item.value)
                    setOpen(false)
                  }}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Select
