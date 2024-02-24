'use client'

import Pagination from '~/components/common/pagination'
import { LIMIT } from '~/configs/api'
import { useAppSearchParams } from '~/hooks/next'

interface NewPaginationProps {
  page: number
  total: number
}

const NewPagination = ({ page, total }: NewPaginationProps) => {
  const searchParams = useAppSearchParams()

  const totalPage = Math.ceil(total / LIMIT)

  const handlePageChange = (page: number) => {
    searchParams.update('page', page)
  }

  return <Pagination page={page} pageCount={totalPage} onPageChange={handlePageChange} />
}

export default NewPagination
