import React from 'react'
import Contact from '~/modules/home/contact'
import CustomerChoice from '~/modules/home/customer-choice'
import HeroBanner from '~/modules/home/hero-banner'
import NewDrops from '~/modules/home/new-drops'
import Tips from '~/modules/home/tips'
import { PhoneCase } from '~/services/case-service'

interface HomePageContentProps {
  customerChoices: PhoneCase[]
  newDrops: PhoneCase[]
}

const HomePageContent = ({ customerChoices, newDrops }: HomePageContentProps) => {
  return (
    <div>
      <HeroBanner />
      <Tips />
      <CustomerChoice phoneCases={customerChoices} />
      <NewDrops phoneCases={newDrops} />
      <Contact />
    </div>
  )
}

export default HomePageContent
