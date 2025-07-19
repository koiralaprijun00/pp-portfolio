import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto bg-blue-700 text-white">
      <div className="container py-12">
        {/* Professor Name and Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">PRAKASH PAUDEL</h2>
          <p className="text-lg opacity-90">Professor of Computer Science and Engineering</p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center mb-8">
          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map(({ link }, i) => {
              return (
                <CMSLink
                  className="text-white hover:opacity-80 transition-opacity"
                  key={i}
                  {...link}
                />
              )
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-8 border-t border-blue-600">
          <div className="text-sm opacity-80">© 2024 Prakash Paudel. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
