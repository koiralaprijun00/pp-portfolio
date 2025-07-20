'use client'

import React from 'react'

interface Person {
  name: string
  title?: string
  image?: string
  url?: string
}

interface PeopleSectionProps {
  people: Person[]
}

export const PeopleSection = ({ people }: PeopleSectionProps) => (
  <section className="relative py-24 px-4 bg-white text-black overflow-hidden">
    {/* Brutalist background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-600 transform rotate-12"></div>
    </div>

    <div className="relative max-w-7xl mx-auto z-10">
      {/* Brutalist header */}
      <div className="mb-16 bg-white relative">
        <h2 className="text-4xl font-black tracking-tight uppercase text-black mb-4">
          People I Work With
        </h2>
      </div>

      {/* Brutalist grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {people.map((person, idx) => (
          <div
            key={idx}
            className="relative bg-white text-black p-6 border-2 border-blue-600 hover:scale-105 transition-all duration-300 flex flex-col items-center"
            style={{
              boxShadow: '1px 1px 0px #000000',
            }}
          >
            {person.image && (
              <div className="mb-4 border-2 border-black overflow-hidden">
                <img src={person.image} alt={person.name} className="w-24 h-24 object-cover" />
              </div>
            )}
            <div className="text-center space-y-2">
              <a
                href={person.url}
                className="text-blue-600 font-bold text-lg uppercase tracking-wider hover:text-blue-800 transition-colors block"
              >
                {person.name}
              </a>
              {person.title && (
                <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                  {person.title}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
