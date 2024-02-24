import { ReactNode } from 'react'
import { SelectItem } from '~/components/common/inputs/select'

export type LayoutProps<T extends object = any> = {
  children: ReactNode
  params?: T
}

export type SortOption<T = string> = SelectItem<T>
