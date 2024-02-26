export const isDev =
  process.env.NEXT_PUBLIC_API_ENDPOINTS_ENV === 'development' ||
  !process.env.NODE_ENV ||
  process.env.NODE_ENV === 'development'

export const serverUrl = 'http://165.22.50.246:8000/api/v1'
