/* eslint-disable @next/next/no-img-element */
import React from 'react'
import classNames from 'classnames/bind'
import styles from './banner.module.scss'

const cx = classNames.bind(styles)

const Banner = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('policies')}>
        <img src="/images/product-banner/1.webp" alt="banner" />
        <img src="/images/product-banner/2.webp" alt="banner" />
      </div>
      <div>
        <img src="/images/product-banner/3.webp" alt="banner" />
        <img src="/images/product-banner/4.webp" alt="banner" />
        <img src="/images/product-banner/5.webp" alt="banner" />
      </div>
    </div>
  )
}

export default Banner
