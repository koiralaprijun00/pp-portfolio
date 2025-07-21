import React from 'react'

export const BlobStorageStatus: React.FC = () => {
  const hasValidToken = Boolean(
    process.env.BLOB_READ_WRITE_TOKEN && process.env.BLOB_READ_WRITE_TOKEN.length > 10,
  )

  return (
    <div
      style={{
        backgroundColor: hasValidToken ? '#d4edda' : '#fff3cd',
        border: `1px solid ${hasValidToken ? '#c3e6cb' : '#ffeaa7'}`,
        borderRadius: '4px',
        padding: '12px',
        margin: '16px 0',
        color: hasValidToken ? '#155724' : '#856404',
      }}
    >
      <h4 style={{ margin: '0 0 8px 0' }}>Storage Configuration</h4>
      <p style={{ margin: 0 }}>
        {hasValidToken
          ? '☁️ Vercel Blob Storage is active - files stored in cloud'
          : '💻 Using local file storage - add BLOB_READ_WRITE_TOKEN to enable cloud storage'}
      </p>
    </div>
  )
}
