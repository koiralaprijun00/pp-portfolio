import Image from 'next/image'
import React from 'react'

interface Testimonial {
  quote: string
  author: string
  authorTitle?: string
  image?: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => (
  <section className="py-16 px-8 bg-white">
    <h2 className="text-3xl font-bold text-blue-700 mb-8">Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((t, idx) => (
        <div key={idx} className="border border-blue-200 p-6 flex" style={{ borderRadius: 0 }}>
          {t.image && (
            <Image
              src={t.image}
              alt={t.author}
              className="w-16 h-16 object-cover mr-6"
              style={{ borderRadius: 0 }}
            />
          )}
          <div>
            <blockquote className="italic text-gray-800 mb-2">&ldquo;{t.quote}&rdquo;</blockquote>
            <div className="font-semibold text-blue-800">{t.author}</div>
            <div className="text-sm text-gray-600">{t.authorTitle}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
)
