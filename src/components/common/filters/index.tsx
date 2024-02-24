import classNames from 'classnames/bind'
import Select from '~/components/common/inputs/select'
import { SortOption } from '~/configs/types'
import styles from './filters.module.scss'

const cx = classNames.bind(styles)

interface FilterProps<T> {
  className?: string
  productCount?: number
  sortValue?: T
  sortOptions?: SortOption<T>[]
  onChangeSort?: (value: T) => void
}

const Filter = <T = string,>({
  className,
  productCount,
  sortValue,
  sortOptions = [],
  onChangeSort,
}: FilterProps<T>) => {
  return (
    <div className={cx('container', className)}>
      <Select
        className={cx('select')}
        placeholder="Sort by"
        label="Sort by:"
        value={sortValue}
        options={sortOptions}
        onChange={onChangeSort}
      />
      <p className={cx('count')}>{productCount} products</p>
    </div>
  )
}

export default Filter
