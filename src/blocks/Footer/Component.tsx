import React from 'react'

export const FooterSection = () => (
  <footer className="bg-blue-700 text-white py-8 px-8 mt-16" style={{ borderRadius: 0 }}>
    <div className="max-w-4xl mx-auto text-center">
      <div className="text-2xl font-bold mb-1">Prakash Paudel</div>
      <div className="text-lg mb-2">Professor, [Your University Name]</div>
      <div className="text-sm">
        &copy; {new Date().getFullYear()} Prakash Paudel. All rights reserved.
      </div>
    </div>
  </footer>
)
