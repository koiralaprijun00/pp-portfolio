import React from 'react'

export const BlobStorageStatus: React.FC = () => {
  const isBlobConfigured = Boolean(
    process.env.BLOB_READ_WRITE_TOKEN && process.env.BLOB_READ_WRITE_TOKEN !== 'placeholder-token',
  )

  return (
    <div
      style={{
        backgroundColor: isBlobConfigured ? '#d4edda' : '#fff3cd',
        border: `1px solid ${isBlobConfigured ? '#c3e6cb' : '#ffeaa7'}`,
        borderRadius: '4px',
        padding: '12px',
        margin: '16px 0',
        color: isBlobConfigured ? '#155724' : '#856404',
      }}
    >
      <h4 style={{ margin: '0 0 8px 0' }}>Storage Configuration</h4>
      <p style={{ margin: 0 }}>
        {isBlobConfigured
          ? '✅ Vercel Blob Storage is active - files will be stored in the cloud'
          : '⚠️ Using local file storage - add BLOB_READ_WRITE_TOKEN to enable Vercel Blob Storage'}
      </p>
    </div>
  )
}
