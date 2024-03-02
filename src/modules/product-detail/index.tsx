'use client'

import React, { useState } from 'react'
import Slider from '~/modules/product-detail/slider'
import { PhoneCaseDetail } from '~/services/case-service'
import classNames from 'classnames/bind'
import styles from './product-detail.module.scss'
import PhoneDropdown from '~/modules/product-detail/phone-dropdown'
import CaseTypes from '~/modules/product-detail/case-type'
import Button from '~/components/common/buttons/main-button'
import CaseInstructions from '~/modules/product-detail/intruction'
import Share from '~/modules/product-detail/share'
import Banner from '~/modules/product-detail/banner'
import PageContainer from '~/components/templates/page/container'
import { phoneModels } from '~/configs/case-model'
import Assurances from '~/modules/product-detail/assurances'

const cx = classNames.bind(styles)

interface Props {
  phoneCase: PhoneCaseDetail
}

const ProductDetailPageContent = ({ phoneCase }: Props) => {
  const [selectedCase, setSelectedCase] = useState(phoneModels[0].id)
  return (
    <PageContainer className={cx('container')}>
      <div className={cx('main')}>
        <Slider title={phoneCase.name} images={phoneCase.sliders || []} />
        <div className={cx('detail')}>
          <h1 className={cx('title')}>{phoneCase.name}</h1>
          <p className={cx('price')}>{phoneCase.price.toLocaleString()} VNĐ</p>
          <PhoneDropdown value={selectedCase} onChange={setSelectedCase} />
          <CaseTypes />
          <div className={cx('actions')}>
            <Button className={cx('btn')} variant="outline">
              Add to cart
            </Button>
            <Button className={cx('btn')}>Customize this case</Button>
          </div>
          <CaseInstructions />
          <Share />
        </div>
        <Assurances />
      </div>
      <Banner />
    </PageContainer>
  )
}

export default ProductDetailPageContent
