import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { serverUrl } from '~/configs/environment'

export interface ApiError {
  code?: number | string
  message?: string
  status?: number
}

const axiosClient = axios.create({
  baseURL: serverUrl,
})

axiosClient.interceptors.request.use((config) => {
  return config
})

axiosClient.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return Promise.reject(handleError(error))
  }
)

export const handleError = (error: any): ApiError => {
  if (axios.isAxiosError(error)) {
    const serverError = error.response?.data

    return {
      status: error.response?.status,
      code: serverError?.code || error.code,
      message: serverError?.message || error.message,
    }
  }

  return {
    code: error.code,
    message: error.message,
  }
}

const get = <T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T> =>
  axiosClient.get<T, T, D>(url, config)

const post = <T = any, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
): Promise<T> => axiosClient.post<T, T, D>(url, data, config)

const put = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
): Promise<R> => axiosClient.put<T, R, D>(url, data, config)

const patch = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
): Promise<R> => axiosClient.patch<T, R, D>(url, data, config)

const deleteRequest = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
): Promise<R> => axiosClient.delete<T, R, D>(url, config)

export { deleteRequest, get, patch, post, put }

export default axiosClient
