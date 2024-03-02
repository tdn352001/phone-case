/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames/bind'
import styles from './slider.module.scss'

const cx = classNames.bind(styles)

interface Props {
  title?: string
  images: any[]
}
const Slider = ({ title, images }: Props) => {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className={cx('container')}>
      <div className={cx('selected-image')}>
        <img src={images[selectedImage]} alt={`${title}-${selectedImage + 1}`} />
      </div>
      <div className={cx('list')}>
        {images.map((image, index) => (
          <div key={index} className={cx('item', { selected: selectedImage === index })}>
            <img
              src={image}
              width={100}
              height={100}
              alt={`${title}-${index + 1}`}
              onClick={() => setSelectedImage(index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
