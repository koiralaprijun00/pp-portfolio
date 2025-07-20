'use client'

import React from 'react'

interface Affiliation {
  name: string
  logo?: string
  url?: string
  description?: string
}

interface AffiliationsSectionProps {
  affiliations: Affiliation[]
}

export const AffiliationsSection = ({ affiliations }: AffiliationsSectionProps) => (
  <section className="relative py-24 px-4 bg-white text-black overflow-hidden">
    {/* Brutalist background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-red-600 transform -rotate-12"></div>
    </div>

    <div className="relative max-w-7xl mx-auto z-10">
      {/* Brutalist header */}
      <div className="mb-16 bg-white relative">
        <h2 className="text-4xl font-black tracking-tight uppercase text-black mb-4">
          Institutional Affiliations
        </h2>
      </div>

      {/* Brutalist grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {affiliations.map((aff, idx) => (
          <div
            key={idx}
            className="relative bg-white text-black p-6 border-2 border-blue-600 hover:scale-105 transition-all duration-300 flex flex-col items-center"
            style={{
              boxShadow: '1px 1px 0px #000000',
            }}
          >
            {aff.logo && (
              <div className="mb-4 border-2 border-black p-4 bg-white">
                <img src={aff.logo} alt={aff.name} className="w-20 h-20 object-contain" />
              </div>
            )}
            <div className="text-center space-y-2">
              <a
                href={aff.url}
                className="text-blue-600 font-bold text-lg uppercase tracking-wider hover:text-blue-800 transition-colors block"
              >
                {aff.name}
              </a>
              {aff.description && (
                <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                  {aff.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
