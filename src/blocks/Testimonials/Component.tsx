'use client'

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
  <section className="relative py-24 px-4 bg-white text-black overflow-hidden">
    {/* Brutalist background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-red-600 transform rotate-45"></div>
    </div>

    <div className="relative max-w-7xl mx-auto z-10">
      {/* Brutalist header */}
      <div className="mb-16 bg-white relative">
        <h2 className="text-4xl font-black tracking-tight uppercase text-black mb-4">
          Testimonials
        </h2>
      </div>

      {/* Brutalist grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="relative bg-white text-black p-8 border-2 border-blue-600 hover:scale-105 transition-all duration-300"
            style={{
              boxShadow: '1px 1px 0px #000000',
            }}
          >
            <div className="flex items-start space-x-6">
              {t.image && (
                <div className="flex-shrink-0">
                  <Image
                    src={t.image}
                    alt={t.author}
                    width={80}
                    height={80}
                    className="object-cover border-2 border-black"
                  />
                </div>
              )}
              <div className="flex-1">
                <blockquote className="text-lg font-medium text-gray-800 mb-4 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t-2 border-black pt-4">
                  <div className="font-bold text-blue-600 uppercase tracking-wider text-lg">
                    {t.author}
                  </div>
                  {t.authorTitle && (
                    <div className="text-sm font-medium text-gray-700 uppercase tracking-wide mt-1">
                      {t.authorTitle}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
