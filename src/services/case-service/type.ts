import { CaseSortTypes, OrderTypes } from '~/configs/api'

export type PhoneCase = {
  id: string
  custom_id: string
  name: string
  type: string
  desc: string
  price: number
  is_sold_out: boolean
  point: number
  images: {
    main: string
    hover: string
  }
  createdAt: string
  updatedAt: string
  sliders?: any[]
}

export type CaseType = {
  id: string
  name: string
}

export type PhoneCaseDetail = {
  id: string
  custom_id: string
  name: string
  type: string
  desc: string
  price: number
  is_sold_out: boolean
  point: number
  createdAt: string
  updatedAt: string
  sliders?: any[]
  types?: any[]
}

export type GetPhoneCasesRequest = {
  limit?: number
  offset?: number
  sort?: CaseSortTypes
  order?: OrderTypes
}

export type GetPhoneCasesResponse = {
  data: {
    cases: PhoneCase[]
    total: number
  }
}

export type GetCaseDetailResponse = {
  data: PhoneCaseDetail
}
