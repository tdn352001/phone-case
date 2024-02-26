import Link from 'next/link'
import React from 'react'
import { PhoneCase } from '~/services/case-service'
import classNames from 'classnames/bind'
import styles from './item.module.scss'
import { dynamicRouters } from '~/configs/routers'
import Image from 'next/image'
import { getImageUrl } from '~/utils/helpers'
const cx = classNames.bind(styles)

interface PhoneCaseItemProps {
  className?: string
  as?: 'li' | 'div'
  phoneCase: PhoneCase
}

const PhoneCaseItem = ({ className, as = 'div', phoneCase }: PhoneCaseItemProps) => {
  const Container = as

  return (
    <Container className={cx('item', className)}>
      <Link className={cx('item-container')} href={dynamicRouters.caseDetail(phoneCase.id)}>
        <div className={cx('item-media')}>
          <div className={cx('item-media-inner')}>
            <Image
              className={cx('item-thumbnail', 'item-thumbnail-main')}
              src={getImageUrl(phoneCase.images.main)}
              fill
              objectFit="container"
              alt={`${phoneCase.name}-1`}
            />
            <Image
              className={cx('item-thumbnail', 'item-thumbnail-hover')}
              src={getImageUrl(phoneCase.images.hover)}
              fill
              objectFit="container"
              alt={`${phoneCase.name}-2`}
            />
          </div>
        </div>
        <h2 className={cx('item-name')}>{phoneCase.name}</h2>
        <p className={cx('item-type')}>{phoneCase.type}</p>
        <p className={cx('item-price')}>{phoneCase.price.toLocaleString()} VNĐ</p>
      </Link>
    </Container>
  )
}

export default PhoneCaseItem
