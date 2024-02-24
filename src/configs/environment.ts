export const isDev =
  process.env.NEXT_PUBLIC_API_ENDPOINTS_ENV === 'development' ||
  !process.env.NODE_ENV ||
  process.env.NODE_ENV === 'development'

export const serverUrl = isDev ? 'http://10.0.0.185:8001/api/v1' : 'http://10.0.0.185:8001/api/v1'
