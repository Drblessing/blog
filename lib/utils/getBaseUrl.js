import { siteUrl } from '@/data/siteMetadata'

export const getBaseUrl = () => {
  const isLocal = process.env.NODE_ENV === 'development'
  return isLocal ? 'http://localhost:3000' : siteUrl
}

export default getBaseUrl
