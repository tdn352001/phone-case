import { cache } from 'react'
import HomePageContent from '~/modules/home'
import { GetPhoneCasesResponse, caseService } from '~/services/case-service'

export const getData = cache(async () => {
  const getCustomerChoices = caseService
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

  const getNewDrops = caseService
    .getCases({
      limit: 8,
      order: 'desc',
      sort: 'created_at',
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
  const [customerChoicesRes, newDropsRes] = await Promise.allSettled([
    getCustomerChoices,
    getNewDrops,
  ])

  const customerChoices =
    customerChoicesRes.status === 'fulfilled' ? customerChoicesRes.value.data.cases : []

  const newDrops = newDropsRes.status === 'fulfilled' ? newDropsRes.value.data.cases : []

  return {
    customerChoices,
    newDrops,
  }
})

export const getNewDrops = cache(async () => {
  return caseService
    .getCases({
      limit: 8,
      order: 'desc',
      sort: 'created_at',
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
  const { customerChoices, newDrops } = await getData()

  return <HomePageContent customerChoices={customerChoices} newDrops={newDrops} />
}

export default HomePage
