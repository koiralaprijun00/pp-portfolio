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
  <section className="py-16 px-8 bg-white">
    <h2 className="text-3xl font-bold text-blue-700 mb-8">Institutional Affiliations</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {affiliations.map((aff, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center border border-blue-200 p-4"
          style={{ borderRadius: 0 }}
        >
          {aff.logo && (
            <img
              src={aff.logo}
              alt={aff.name}
              className="w-20 h-20 object-contain mb-2"
              style={{ borderRadius: 0 }}
            />
          )}
          <a href={aff.url} className="text-blue-800 font-semibold text-lg hover:underline">
            {aff.name}
          </a>
          <div className="text-sm text-gray-700 mt-1 text-center">{aff.description}</div>
        </div>
      ))}
    </div>
  </section>
)
