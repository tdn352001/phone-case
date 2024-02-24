'use client'

import classNames from 'classnames/bind'
import ReactPaginate from 'react-paginate'
import Icon from '~/components/common/icon'
import styles from './pagination.module.scss'

const cx = classNames.bind(styles)

interface PaginationProps {
  className?: string
  page?: number
  pageCount?: number
  onPageChange?: (page: number) => void
}

const Pagination = ({ page = 1, pageCount = 10, className, onPageChange }: PaginationProps) => {
  const handlePageChange = ({ selected }: { selected: number }) => {
    if (onPageChange) {
      onPageChange(selected + 1)
    }
  }

  if (pageCount <= 1 || page > pageCount) {
    return null
  }

  return (
    <ReactPaginate
      className={cx('pagination', className)}
      forcePage={page - 1}
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      breakClassName={cx('nav-item')}
      breakLinkClassName={cx('nav-item-link')}
      nextClassName={cx('nav-item')}
      nextLinkClassName={cx('nav-item-link')}
      previousClassName={cx('nav-item')}
      previousLinkClassName={cx('nav-item-link')}
      activeLinkClassName={cx('nav-item-link--active')}
      disabledClassName={cx('nav-item--disabled')}
      disabledLinkClassName={cx('nav-item-link--disabled')}
      pageClassName={cx('nav-item')}
      pageLinkClassName={cx('nav-item-link')}
      previousLabel={<Icon name="ChevronLeft" />}
      nextLabel={<Icon name="ChevronRight" />}
      onPageChange={handlePageChange}
      breakLabel="..."
    />
  )
}

export default Pagination
