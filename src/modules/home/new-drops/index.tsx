import classNames from 'classnames/bind'
import HomeSectionContainer from '~/components/templates/home/container'
import PageTitle from '~/components/templates/page/title'
import PhoneCaseCarousel from '~/components/templates/phone-cases/carousel'
import { PhoneCase } from '~/services/case-service'
import styles from './new-drops.module.scss'

const cx = classNames.bind(styles)

interface NewDropsProps {
  phoneCases: PhoneCase[]
}

const NewDrops = ({ phoneCases }: NewDropsProps) => {
  return (
    <HomeSectionContainer className={cx('container')}>
      <PageTitle>New Drops</PageTitle>
      <PhoneCaseCarousel cases={phoneCases} />
    </HomeSectionContainer>
  )
}

export default NewDrops
