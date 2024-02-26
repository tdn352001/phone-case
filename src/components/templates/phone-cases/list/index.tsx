import classNames from 'classnames/bind'
import Image from 'next/image'
import Link from 'next/link'
import { dynamicRouters } from '~/configs/routers'
import { PhoneCase } from '~/services/case-service'
import { getImageUrl } from '~/utils/helpers'
import styles from './list.module.scss'
import PhoneCaseItem from '~/components/templates/phone-cases/item'

const cx = classNames.bind(styles)

interface PhoneCaseListProps {
  cases: PhoneCase[]
}

const PhoneCaseList = ({ cases }: PhoneCaseListProps) => {
  return (
    <ul className={cx('container')}>
      {cases.map((phoneCase) => (
        <PhoneCaseItem key={phoneCase.id} as="li" phoneCase={phoneCase} />
      ))}
    </ul>
  )
}

export default PhoneCaseList
