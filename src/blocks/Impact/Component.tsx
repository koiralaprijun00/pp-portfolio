import React from 'react'

export const ImpactSection = ({ stats }) => (
  <section className="py-16 px-8 bg-white">
    <h2 className="text-3xl font-bold text-blue-700 mb-8">My Impacts</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-blue-50 border border-blue-200 p-6 shadow-sm"
          style={{ borderRadius: 0 }}
        >
          <div className="text-4xl font-bold text-blue-700 mb-2">{stat.value}</div>
          <div className="text-lg font-semibold mb-1">{stat.label}</div>
          <div className="text-sm text-gray-700">{stat.description}</div>
        </div>
      ))}
    </div>
  </section>
)
