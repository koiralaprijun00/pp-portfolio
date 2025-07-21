import { Plugin } from 'payload'

export const storagePlugin = (): Plugin[] => {
  // Temporarily disabled Vercel Blob Storage to fix upload handler errors
  // Will use local storage until the issue is resolved
  // To re-enable: uncomment the code below and ensure BLOB_READ_WRITE_TOKEN is set

  /*
  const hasValidToken = 
    process.env.BLOB_READ_WRITE_TOKEN && 
    process.env.BLOB_READ_WRITE_TOKEN.length > 10

  if (hasValidToken) {
    const { vercelBlobStorage } = require('@payloadcms/storage-vercel-blob')
    return [
      vercelBlobStorage({
        collections: { media: true },
        token: process.env.BLOB_READ_WRITE_TOKEN,
      }),
    ]
  }
  */

  return []
}
