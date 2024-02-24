import { Suspense } from 'react'
import PageBody from '~/components/templates/page/body'
import PageContainer from '~/components/templates/page/container'
import PageTitle from '~/components/templates/page/title'
import PhoneCaseList from '~/components/templates/phone-cases/list'
import { CaseSortTypes, OrderTypes } from '~/configs/api'
import NewFilters from '~/modules/new/filter'
import NewPagination from '~/modules/new/pagination'
import { PhoneCase } from '~/services/case-service'

type NewDropsPageContentProps = {
  sort: CaseSortTypes
  order: OrderTypes
  page: number
  cases: PhoneCase[]
  total: number
}

const NewDropsPageContent = ({ cases, total, sort, order, page }: NewDropsPageContentProps) => {
  return (
    <PageContainer>
      <PageTitle>New Drops</PageTitle>
      <PageBody>
        <Suspense fallback={<NewFilters.Fallback />}>
          <NewFilters count={total} sort={sort} order={order} />
        </Suspense>
        <PhoneCaseList cases={cases} />
        <Suspense>
          <NewPagination page={page} total={total} />
        </Suspense>
      </PageBody>
    </PageContainer>
  )
}

export default NewDropsPageContent
