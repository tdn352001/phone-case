import classNames from 'classnames/bind'
import Image from 'next/image'
import Link from 'next/link'
import { dynamicRouters } from '~/configs/routers'
import { PhoneCase } from '~/services/case-service'
import { getImageUrl } from '~/utils/helpers'
import styles from './list.module.scss'

const cx = classNames.bind(styles)

interface PhoneCaseListProps {
  cases: PhoneCase[]
}

const PhoneCaseList = ({ cases }: PhoneCaseListProps) => {
  return (
    <ul className={cx('container')}>
      {cases.map((item) => (
        <li key={item.id} className={cx('item')}>
          <Link className={cx('item-container')} href={dynamicRouters.caseDetail(item.id)}>
            <div className={cx('item-media')}>
              <div className={cx('item-media-inner')}>
                <Image
                  className={cx('item-thumbnail', 'item-thumbnail-main')}
                  src={getImageUrl(item.images.main)}
                  fill
                  objectFit="container"
                  alt={`${item.name}-1`}
                />
                <Image
                  className={cx('item-thumbnail', 'item-thumbnail-hover')}
                  src={getImageUrl(item.images.hover)}
                  fill
                  objectFit="container"
                  alt={`${item.name}-2`}
                />
              </div>
            </div>
            <h2 className={cx('item-name')}>{item.name}</h2>
            <p className={cx('item-type')}>{item.type}</p>
            <p className={cx('item-price')}>{item.price.toLocaleString()} VNĐ</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PhoneCaseList
