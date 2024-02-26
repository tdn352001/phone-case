import React from 'react'
import CustomerChoice from '~/modules/home/customer-choice'
import HeroBanner from '~/modules/home/hero-banner'
import Tips from '~/modules/home/tips'
import { PhoneCase } from '~/services/case-service'

interface HomePageContentProps {
  customerChoices: PhoneCase[]
}

const HomePageContent = ({ customerChoices }: HomePageContentProps) => {
  return (
    <div>
      <HeroBanner />
      <Tips />
      <CustomerChoice phoneCases={customerChoices} />
    </div>
  )
}

export default HomePageContent
