import { cache } from 'react'
import HomePageContent from '~/modules/home'
import { GetPhoneCasesResponse, caseService } from '~/services/case-service'

export const getCustomerChoices = cache(async () => {
  return caseService
    .getCases({
      limit: 8,
      order: 'desc',
      sort: 'point',
    })
    .catch((err): GetPhoneCasesResponse => {
      console.error(err)
      return {
        data: {
          cases: [],
          total: 0,
        },
      }
    })
})

const HomePage = async () => {
  const [customerChoicesRes] = await Promise.allSettled([getCustomerChoices()])

  const customerChoices =
    customerChoicesRes.status === 'fulfilled' ? customerChoicesRes.value.data.cases : []
  return <HomePageContent customerChoices={customerChoices} />
}

export default HomePage
