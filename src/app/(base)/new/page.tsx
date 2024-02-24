import { cache } from 'react'
import { CaseSortTypes, LIMIT, OrderTypes, caseSortTypes, orderTypes } from '~/configs/api'
import NewDropsPageContent from '~/modules/new'
import { GetPhoneCasesRequest, GetPhoneCasesResponse, caseService } from '~/services/case-service'

export const getPhoneCases = cache(async (request: GetPhoneCasesRequest) => {
  return caseService.getCases(request).catch((err): GetPhoneCasesResponse => {
    console.error(err)
    return {
      data: {
        cases: [],
        total: 0,
      },
    }
  })
})

export const revalidate = 60

const NewDropsPage = async ({
  searchParams: { sort, order, page },
}: {
  searchParams: { sort?: string; order?: string; page?: number | string }
}) => {
  const sortValue = (
    sort && caseSortTypes.includes(sort as any) ? sort : 'created_at'
  ) as CaseSortTypes
  const orderValue = (order && orderTypes.includes(order as any) ? order : 'desc') as OrderTypes
  let pageValue = Math.floor(Math.max(page ? Number(page) || 1 : 1, 1))
  const offset = (pageValue - 1) * LIMIT

  const res = await getPhoneCases({
    limit: LIMIT,
    offset,
    sort: sortValue,
    order: orderValue,
  })

  console.log({ res })

  return (
    <NewDropsPageContent
      cases={res.data.cases}
      total={res.data.total}
      page={pageValue}
      sort={sortValue}
      order={orderValue}
    />
  )
}

export default NewDropsPage
