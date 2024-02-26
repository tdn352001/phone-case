'use client'
import { motion, useMotionValue } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Images } from '~/assets/images'
import classNames from 'classnames/bind'
import styles from './hero-banner.module.scss'
import IconButton from '~/components/common/buttons/icon-button'
import Controls from '~/components/common/controls'

const cx = classNames.bind(styles)

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
}

const banners = [Images.banner1, Images.banner2, Images.banner3, Images.banner4]

const HeroBanner = () => {
  const [imgIndex, setImgIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const dragX = useMotionValue(0)

  const handleDragEnd = () => {
    const x = dragX.get()

    if (x <= -DRAG_BUFFER && imgIndex < banners.length - 1) {
      setImgIndex((pv) => pv + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1)
    }
  }

  const handleNextBanner = () => {
    setImgIndex((pv) => {
      if (pv === banners.length - 1) {
        return 0
      }
      return pv + 1
    })
  }

  const handlePrevBanner = () => {
    setImgIndex((pv) => {
      if (pv === 0) {
        return banners.length - 1
      }
      return pv - 1
    })
  }

  useEffect(() => {
    if (isPlaying) {
      const intervalRef = setInterval(() => {
        const x = dragX.get()

        if (x === 0) {
          setImgIndex((pv) => {
            if (pv === banners.length - 1) {
              return 0
            }
            return pv + 1
          })
        }
      }, AUTO_DELAY)

      return () => clearInterval(intervalRef)
    }
  }, [dragX, isPlaying])

  return (
    <section className={cx('container')}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={handleDragEnd}
        className={cx('sliders')}
      >
        {banners.map((imgSrc, idx) => {
          return (
            <motion.div
              key={idx}
              className={cx('slider-item')}
              style={{
                backgroundImage: `url(${imgSrc.src})`,
              }}
              transition={SPRING_OPTIONS}
            />
          )
        })}
        <div className={cx('gradient-edge', 'gradient-edge--left')} />
        <div className={cx('gradient-edge', 'gradient-edge--right')} />
      </motion.div>

      <Controls
        separator
        step={imgIndex + 1}
        total={banners.length}
        onPrevStep={handlePrevBanner}
        onNextStep={handleNextBanner}
        pauseControl
        isPlaying={isPlaying}
        onPlayChange={setIsPlaying.bind(this, (pv) => !pv)}
      />
    </section>
  )
}

export default HeroBanner
