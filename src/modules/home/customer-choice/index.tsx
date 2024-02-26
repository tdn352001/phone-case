import React, { cache } from 'react'
import classNames from 'classnames/bind'
import styles from './customer-choice.module.scss'
import PageContainer from '~/components/templates/page/container'
import PageTitle from '~/components/templates/page/title'
import HomeSectionContainer from '~/components/templates/home/container'
import PhoneCaseCarousel from '~/components/templates/phone-cases/carousel'
import {
  GetPhoneCasesRequest,
  GetPhoneCasesResponse,
  PhoneCase,
  caseService,
} from '~/services/case-service'

const cx = classNames.bind(styles)

interface CustomerChoiceProps {
  phoneCases: PhoneCase[]
}

const CustomerChoice = ({ phoneCases }: CustomerChoiceProps) => {
  return (
    <HomeSectionContainer>
      <PageTitle>Customer Choice</PageTitle>
      <PhoneCaseCarousel cases={phoneCases} />
    </HomeSectionContainer>
  )
}

export default CustomerChoice
