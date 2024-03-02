/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import classNames from 'classnames/bind'
import styles from './case-type.module.scss'

const cx = classNames.bind(styles)

interface CaseTypesProps {}

const caseTypes = [
  {
    id: '1',
    price: 20,
    thumbnail: '/images/case-type-1.webp',
  },
]

const CaseTypes = () => {
  return (
    <div className={cx('container')}>
      <p className={cx('label')}>Case type</p>
      <div className={cx('list')}>
        {caseTypes.map((item, index) => {
          return (
            <div key={item.id} className={cx('item', { selected: !index })}>
              <img src={item.thumbnail} alt="case type" />
              <span>{item.price.toLocaleString()} VNĐ</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CaseTypes
