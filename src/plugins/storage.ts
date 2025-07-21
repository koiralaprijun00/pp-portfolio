import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Plugin } from 'payload'

export const storagePlugin = (): Plugin[] => {
  // Only use Vercel Blob Storage if the token is properly configured
  const hasValidToken =
    process.env.BLOB_READ_WRITE_TOKEN && process.env.BLOB_READ_WRITE_TOKEN.length > 0

  if (hasValidToken) {
    return [
      vercelBlobStorage({
        collections: {
          media: true,
        },
        token: process.env.BLOB_READ_WRITE_TOKEN!,
      }),
    ]
  }

  // Return empty array if no valid token - fallback to local storage
  return []
}
