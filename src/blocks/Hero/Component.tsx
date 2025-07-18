import React from 'react'

export const HeroSection = ({ name, title, intro, imageUrl }) => (
  <section className="bg-blue-700 text-white py-16 px-8 flex items-center">
    {imageUrl && (
      <img
        src={imageUrl}
        alt={name}
        className="w-48 h-48 object-cover mr-12"
        style={{ borderRadius: 0 }}
      />
    )}
    <div>
      <h1 className="text-5xl font-bold mb-2">{name}</h1>
      <h2 className="text-2xl mb-4">{title}</h2>
      <p className="text-lg">{intro}</p>
    </div>
  </section>
)
