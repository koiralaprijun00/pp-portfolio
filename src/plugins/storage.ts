import { Plugin } from 'payload'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

export const storagePlugin = (): Plugin[] => {
  // Use blob storage when token is available (both dev and production)
  const hasValidToken =
    process.env.BLOB_READ_WRITE_TOKEN && process.env.BLOB_READ_WRITE_TOKEN.length > 10

  if (hasValidToken) {
    return [
      vercelBlobStorage({
        collections: { media: true },
        token: process.env.BLOB_READ_WRITE_TOKEN,
      }),
    ]
  }

  // Fallback to local storage if no token
  return []
}
