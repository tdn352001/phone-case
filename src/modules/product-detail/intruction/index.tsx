import React, { useState } from 'react'
import Icon from '~/components/common/icon'
import classNames from 'classnames/bind'
import styles from './instruction.module.scss'

const cx = classNames.bind(styles)

const CaseInstructions = () => {
  const [show, setShow] = useState(false)

  return (
    <div className={cx('container')}>
      <button className={cx('button')} onClick={setShow.bind(this, !show)}>
        <Icon name="Heart" />
        <span>Care Instructions</span>
        <Icon className={cx({ show })} name="ChevronDown" />
      </button>
      {show && (
        <p className={cx('desc')}>
          This product can resist high temperatures, freezing, and acidic substances. Plastic
          products, keep away from flames.
        </p>
      )}
    </div>
  )
}

export default CaseInstructions
