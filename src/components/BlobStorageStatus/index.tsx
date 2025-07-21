import React from 'react'

export const BlobStorageStatus: React.FC = () => {
  // Temporarily disabled blob storage to fix upload handler errors

  return (
    <div
      style={{
        backgroundColor: '#f8d7da',
        border: '1px solid #f5c6cb',
        borderRadius: '4px',
        padding: '12px',
        margin: '16px 0',
        color: '#721c24',
      }}
    >
      <h4 style={{ margin: '0 0 8px 0' }}>Storage Configuration</h4>
      <p style={{ margin: 0 }}>
        📁 Using local file storage - Vercel Blob Storage temporarily disabled to fix errors
      </p>
    </div>
  )
}
