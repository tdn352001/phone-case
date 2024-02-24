'use client'

import Filter from '~/components/common/filters'
import { CaseSortTypes, OrderTypes, SortValue, caseSortOptions } from '~/configs/api'
import { useAppSearchParams } from '~/hooks/next'

type NewFiltersProps = {
  sort: CaseSortTypes
  order: OrderTypes
  count: number
}

const NewFilters = ({ count, sort, order }: NewFiltersProps) => {
  const value = {
    sort,
    order,
  }

  const searchParams = useAppSearchParams()

  const handleSortChange = ({ sort, order }: SortValue) => {
    searchParams.updateMultiple({ sort, order })
  }

  return (
    <Filter
      productCount={count}
      sortValue={value}
      sortOptions={caseSortOptions}
      onChangeSort={handleSortChange}
    />
  )
}

NewFilters.Fallback = () => {
  return (
    <Filter
      productCount={0}
      sortValue={{ sort: 'created_at', order: 'desc' }}
      sortOptions={caseSortOptions}
    />
  )
}

export default NewFilters
