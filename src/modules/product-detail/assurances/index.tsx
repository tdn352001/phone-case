import React from 'react'

import classNames from 'classnames/bind'
import styles from './assurances.module.scss'

const cx = classNames.bind(styles)

const Assurances = () => {
  return (
    <p className={cx('desc')}>
      <br /> ☑️ 180 days quality warranty <br /> ☑️ Nice Rigidity <br /> ☑️ Shock absorbing
      technique inside the bumper
      <br /> ☑️ Raised edges protect camera and screen from sliding and dropping <br /> ☑️ All
      designs support personalized customization <br /> ☑️ Made of at least 60% recycled material{' '}
      <br /> ☑️ Upgraded anti-oxidant
      <br /> ☑️ Tactile Buttons
    </p>
  )
}

export default Assurances
