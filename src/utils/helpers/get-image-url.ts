import { serverUrl } from '~/configs/environment'

export const getImageUrl = (path: string) => {
  return `${serverUrl}/getFile?filePath=${path}`
}
