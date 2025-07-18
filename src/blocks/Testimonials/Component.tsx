import React from 'react'

export const TestimonialsSection = ({ testimonials }) => (
  <section className="py-16 px-8 bg-white">
    <h2 className="text-3xl font-bold text-blue-700 mb-8">Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((t, idx) => (
        <div key={idx} className="border border-blue-200 p-6 flex" style={{ borderRadius: 0 }}>
          {t.image && (
            <img
              src={t.image}
              alt={t.author}
              className="w-16 h-16 object-cover mr-6"
              style={{ borderRadius: 0 }}
            />
          )}
          <div>
            <blockquote className="italic text-gray-800 mb-2">"{t.quote}"</blockquote>
            <div className="font-semibold text-blue-800">{t.author}</div>
            <div className="text-sm text-gray-600">{t.authorTitle}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
)
