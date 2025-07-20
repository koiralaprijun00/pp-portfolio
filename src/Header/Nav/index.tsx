'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, Menu } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex items-center space-x-8">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map(({ link }, i) => {
          return (
            <CMSLink
              key={i}
              {...link}
              appearance="link"
              className="text-white hover:text-blue-100 font-medium transition-colors duration-200 relative group"
            />
          )
        })}
      </div>

      {/* Search Button */}
      <Link
        href="/search"
        className="p-2 text-white hover:text-blue-100 hover:bg-blue-700 rounded-lg transition-all duration-200 group"
      >
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </Link>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 text-white hover:text-blue-100 hover:bg-blue-700 rounded-lg transition-all duration-200">
        <Menu className="w-5 h-5" />
      </button>
    </nav>
  )
}
