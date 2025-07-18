import React from 'react'

export const PeopleSection = ({ people }) => (
  <section className="py-16 px-8 bg-white">
    <h2 className="text-3xl font-bold text-blue-700 mb-8">People I Work With</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {people.map((person, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center border border-blue-200 p-4"
          style={{ borderRadius: 0 }}
        >
          {person.image && (
            <img
              src={person.image}
              alt={person.name}
              className="w-20 h-20 object-cover mb-2"
              style={{ borderRadius: 0 }}
            />
          )}
          <a href={person.url} className="text-blue-800 font-semibold text-lg hover:underline">
            {person.name}
          </a>
          <div className="text-sm text-gray-700 mt-1 text-center">{person.title}</div>
        </div>
      ))}
    </div>
  </section>
)
