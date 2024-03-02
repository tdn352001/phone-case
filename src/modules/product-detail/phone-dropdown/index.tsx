import React from 'react'
import Select, { SelectItem } from '~/components/common/inputs/select'
import { phoneModels } from '~/configs/case-model'
import classNames from 'classnames/bind'
import styles from './phone-dropdown.module.scss'

const cx = classNames.bind(styles)

interface PhoneDropdownProps {
  value?: string
  onChange?: (value: string) => void
}

const phoneModelOptions = phoneModels.map((item) => ({
  value: item.id,
  label: item.name,
}))

const PhoneDropdown = ({ value, onChange }: PhoneDropdownProps) => {
  return (
    <div className={cx('container')}>
      <Select label="Phone model" value={value} options={phoneModelOptions} onChange={onChange} />
    </div>
  )
}

export default PhoneDropdown
