import React from 'react'

interface MediaItem {
  title: string
  url: string
  description?: string
}

interface MediaOutreachSectionProps {
  media: MediaItem[]
}

export const MediaOutreachSection = ({ media }: MediaOutreachSectionProps) => (
  <section className="py-16 px-8 bg-white">
    <h2 className="text-3xl font-bold text-blue-700 mb-8">Media and Outreach</h2>
    <ul className="space-y-4">
      {media.map((item, idx) => (
        <li key={idx} className="border-b border-blue-100 pb-2" style={{ borderRadius: 0 }}>
          <a href={item.url} className="text-blue-800 font-semibold hover:underline">
            {item.title}
          </a>
          <div className="text-sm text-gray-700">{item.description}</div>
        </li>
      ))}
    </ul>
  </section>
)
