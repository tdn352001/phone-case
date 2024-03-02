import { get } from '~/libs/axios'
import { GetPhoneCasesRequest, GetPhoneCasesResponse } from './type'

const getCases = async (request: GetPhoneCasesRequest) => {
  return get<GetPhoneCasesResponse>('/case', {
    params: request,
  })
}

const getCaseDetail = async (id: string) => {
  return get<GetPhoneCasesResponse>(`/case/${id}`)
}

export * from './type'
export const caseService = { getCases, getCaseDetail }
