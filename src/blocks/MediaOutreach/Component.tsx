'use client'

import React from 'react'

interface MediaItem {
  title: string
  url: string
  description?: string
}

interface MediaOutreachSectionProps {
  media: MediaItem[]
}

export const MediaOutreachSection = ({ media }: MediaOutreachSectionProps) => (
  <section className="relative py-24 px-4 bg-white text-black overflow-hidden">
    {/* Brutalist background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-red-600 transform rotate-45"></div>
    </div>

    <div className="relative max-w-7xl mx-auto z-10">
      {/* Brutalist header */}
      <div className="mb-16 bg-white relative">
        <h2 className="text-4xl font-black tracking-tight uppercase text-black mb-4">
          Media and Outreach
        </h2>
      </div>

      {/* Brutalist list */}
      <div className="space-y-6">
        {media.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white text-black p-8 border-2 border-blue-600 hover:scale-105 transition-all duration-300"
            style={{
              boxShadow: '1px 1px 0px #000000',
            }}
          >
            <div className="space-y-3">
              <a
                href={item.url}
                className="text-blue-600 font-bold text-xl uppercase tracking-wider hover:text-blue-800 transition-colors block"
              >
                {item.title}
              </a>
              {item.description && (
                <div className="text-sm font-medium text-gray-700 uppercase tracking-wide leading-relaxed">
                  {item.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
