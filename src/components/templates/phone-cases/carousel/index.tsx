'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'
import { PhoneCase } from '~/services/case-service'
import classNames from 'classnames/bind'
import styles from './carousel.module.scss'
import PhoneCaseItem from '~/components/templates/phone-cases/item'
import Controls from '~/components/common/controls'
import { useDeviceType } from '~/hooks/device'
import { DeviceType } from '~/store/slices/device'

const cx = classNames.bind(styles)

interface PhoneCaseListProps {
  className?: string
  cases: PhoneCase[]
  control?: boolean
}

const PhoneCaseCarousel = ({ className, cases, control = true }: PhoneCaseListProps) => {
  const [currentStep, setCurrentStep] = useState(1)

  const { device } = useDeviceType()

  const totalSteps = useMemo(() => {
    switch (device) {
      case DeviceType.MOBILE:
        return cases.length
      case DeviceType.TABLET:
        return cases.length - 1
      case DeviceType.DESKTOP:
        return cases.length - 2
      default:
        return cases.length
    }
  }, [device, cases.length])

  const listRef = useRef<HTMLDivElement>(null)

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps))
  }

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
  }

  useEffect(() => {
    if (currentStep > totalSteps) {
      setCurrentStep(totalSteps)
    }
  }, [currentStep, totalSteps])

  useEffect(() => {
    if (listRef.current) {
      const scrollWidth = listRef.current.scrollWidth
      const itemWidth = scrollWidth / cases.length
      listRef.current.scrollTo({
        left: itemWidth * (currentStep - 1),
        behavior: 'smooth',
      })
    }
  }, [currentStep, cases.length, listRef])

  return (
    <div className={cx('container', className)}>
      <div className={cx('list')} ref={listRef}>
        {cases.map((phoneCase) => (
          <PhoneCaseItem key={phoneCase.id} className={cx('item')} as="li" phoneCase={phoneCase} />
        ))}
      </div>
      {control && (
        <Controls
          className={cx('controls')}
          step={currentStep}
          total={totalSteps}
          onNextStep={nextStep}
          onPrevStep={prevStep}
        />
      )}
    </div>
  )
}

export default PhoneCaseCarousel
