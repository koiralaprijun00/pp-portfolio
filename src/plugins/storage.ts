import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Plugin } from 'payload'

export const storagePlugin = (): Plugin[] => {
  // Always return the plugin to maintain consistency between client and server
  // Use a placeholder token if not configured to prevent handler mismatch
  const token = process.env.BLOB_READ_WRITE_TOKEN || 'placeholder-token'

  return [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token,
    }),
  ]
}
