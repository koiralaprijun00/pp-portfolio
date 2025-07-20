'use client'

import React from 'react'

interface Article {
  title: string
  url: string
}

interface PublicationsSectionProps {
  researchArticles: Article[]
  popularArticles: Article[]
  blogPosts: Article[]
}

export const PublicationsSection = ({
  researchArticles,
  popularArticles,
  blogPosts,
}: PublicationsSectionProps) => (
  <section className="relative py-24 px-4 bg-white text-black overflow-hidden">
    {/* Brutalist background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-red-600 transform -rotate-12"></div>
    </div>

    <div className="relative max-w-7xl mx-auto z-10">
      {/* Brutalist header */}
      <div className="mb-16 bg-white relative">
        <h2 className="text-4xl font-black tracking-tight uppercase text-black mb-4">
          Publications
        </h2>
      </div>

      {/* Brutalist grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className="relative bg-white text-black p-8 border-2 border-blue-600 hover:scale-105 transition-all duration-300"
          style={{
            boxShadow: '1px 1px 0px #000000',
          }}
        >
          <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 border-b-4 border-black pb-2">
            Research Articles
          </h3>
          <ul className="space-y-4">
            {researchArticles.map((item, idx) => (
              <li key={idx} className="border-b-2 border-blue-200 pb-3">
                <a
                  href={item.url}
                  className="text-blue-800 hover:text-blue-600 font-medium uppercase tracking-wide text-sm transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative bg-white text-black p-8 border-2 border-blue-600 hover:scale-105 transition-all duration-300"
          style={{
            boxShadow: '1px 1px 0px #000000',
          }}
        >
          <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 border-b-4 border-black pb-2">
            Popular Articles
          </h3>
          <ul className="space-y-4">
            {popularArticles.map((item, idx) => (
              <li key={idx} className="border-b-2 border-blue-200 pb-3">
                <a
                  href={item.url}
                  className="text-blue-800 hover:text-blue-600 font-medium uppercase tracking-wide text-sm transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative bg-white text-black p-8 border-2 border-blue-600 hover:scale-105 transition-all duration-300"
          style={{
            boxShadow: '1px 1px 0px #000000',
          }}
        >
          <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 border-b-4 border-black pb-2">
            Blog
          </h3>
          <ul className="space-y-4">
            {blogPosts.map((item, idx) => (
              <li key={idx} className="border-b-2 border-blue-200 pb-3">
                <a
                  href={item.url}
                  className="text-blue-800 hover:text-blue-600 font-medium uppercase tracking-wide text-sm transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)
