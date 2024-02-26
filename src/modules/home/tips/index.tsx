import React from 'react'
import classNames from 'classnames/bind'
import styles from './tips.module.scss'

const cx = classNames.bind(styles)

const Tips = () => {
  return (
    <section className={cx('container')}>
      <p className={cx('text')}>30 Days free replacements for quality issues</p>
    </section>
  )
}

export default Tips
