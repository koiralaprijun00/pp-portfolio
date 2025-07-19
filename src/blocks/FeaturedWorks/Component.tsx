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
  <section className="py-16 px-8 bg-white">
    <h2 className="text-3xl font-bold text-blue-700 mb-8">Featured Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {works.map((work, idx) => (
        <div key={idx} className="border border-blue-200 p-4" style={{ borderRadius: 0 }}>
          {work.image && (
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-40 object-cover mb-4"
              style={{ borderRadius: 0 }}
            />
          )}
          <a href={work.url} className="text-blue-800 font-semibold text-lg hover:underline">
            {work.title}
          </a>
          <div className="text-sm text-gray-700 mt-2">{work.description}</div>
        </div>
      ))}
    </div>
  </section>
)
