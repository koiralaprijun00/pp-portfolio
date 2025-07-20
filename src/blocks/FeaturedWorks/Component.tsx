'use client'

import React from 'react'

interface Work {
  title: string
  image?: string
  url?: string
  description?: string
}

interface FeaturedWorksSectionProps {
  works: Work[]
}

export const FeaturedWorksSection = ({ works }: FeaturedWorksSectionProps) => (
  <section className="relative py-24 px-4 bg-white text-black overflow-hidden">
    {/* Brutalist background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-red-600 transform -rotate-45"></div>
    </div>

    <div className="relative max-w-7xl mx-auto z-10">
      {/* Brutalist header */}
      <div className="mb-16 bg-white relative">
        <h2 className="text-4xl font-black tracking-tight uppercase text-black mb-4">
          Featured Works
        </h2>
      </div>

      {/* Brutalist grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {works.map((work, idx) => (
          <div
            key={idx}
            className="relative bg-white text-black p-8 border-2 border-blue-600 hover:scale-105 transition-all duration-300"
            style={{
              boxShadow: '1px 1px 0px #000000',
            }}
          >
            {work.image && (
              <div className="mb-6 border-2 border-black overflow-hidden">
                <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
              </div>
            )}
            <div className="space-y-4">
              <a
                href={work.url}
                className="text-blue-600 font-bold text-xl uppercase tracking-wider hover:text-blue-800 transition-colors block"
              >
                {work.title}
              </a>
              {work.description && (
                <div className="text-sm font-medium text-gray-700 uppercase tracking-wide leading-relaxed">
                  {work.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
