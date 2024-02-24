import { SortOption } from '~/configs/types'

export const orderTypes = ['asc', 'desc'] as const
export const caseSortTypes = ['created_at', 'price', 'name', 'point'] as const

export type OrderTypes = (typeof orderTypes)[number]
export type CaseSortTypes = (typeof caseSortTypes)[number]

export type SortValue = {
  sort: CaseSortTypes
  order: OrderTypes
}

export const caseSortOptions: SortOption<SortValue>[] = [
  {
    label: 'Date, new to old',
    value: {
      sort: 'created_at',
      order: 'desc',
    },
  },
  {
    label: 'Date, old to new',
    value: {
      sort: 'created_at',
      order: 'asc',
    },
  },
  {
    label: 'Price, high to low',
    value: {
      sort: 'price',
      order: 'desc',
    },
  },
  {
    label: 'Price, low to high',
    value: {
      sort: 'price',
      order: 'asc',
    },
  },
  {
    label: 'Name, A to Z',
    value: {
      sort: 'name',
      order: 'asc',
    },
  },
  {
    label: 'Name, Z to A',
    value: {
      sort: 'name',
      order: 'desc',
    },
  },
  {
    label: 'Point, high to low',
    value: {
      sort: 'point',
      order: 'desc',
    },
  },
  {
    label: 'Point, low to high',
    value: {
      sort: 'point',
      order: 'asc',
    },
  },
]

export const LIMIT = 4
