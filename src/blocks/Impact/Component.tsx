'use client'

import React from 'react'
import CountUp from 'react-countup'

interface Stat {
  label: string
  value: number
  description?: string
}

interface ImpactSectionProps {
  stats: Stat[]
  subtitle?: string
}

export const ImpactSection = ({ stats, subtitle }: ImpactSectionProps) => (
  <section className="relative py-24 px-4 bg-white text-black overflow-hidden">
    {/* Brutalist background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-600 transform rotate-12"></div>
    </div>

    <div className="relative max-w-7xl mx-auto z-10">
      {/* Brutalist header */}
      <div className="mb-16 bg-white relative">
        <h2 className="text-4xl font-black tracking-tight uppercase text-black mb-4">My Impacts</h2>
        {subtitle && (
          <p className="text-xl font-bold text-red-500 uppercase tracking-wider">{subtitle}</p>
        )}
      </div>

      {/* Brutalist grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="relative bg-white text-black p-8 border-2 border-blue-600 hover:scale-105 transition-all duration-300"
            style={{
              boxShadow: '1px 1px 0px #000000',
            }}
            tabIndex={0}
            aria-label={`${stat.label}: ${stat.value}${stat.description ? ' - ' + stat.description : ''}`}
          >
            {/* Brutalist content */}
            <div>
              <div className="text-7xl font-black text-blue-600 mb-8 leading-none">
                <CountUp end={stat.value} duration={2} />
              </div>
              <div className="text-2xl font-bold uppercase tracking-wider mb-2 border-b-4 border-black pb-2">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                  {stat.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
