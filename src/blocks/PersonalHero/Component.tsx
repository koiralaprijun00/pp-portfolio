import React from 'react'
import Image from 'next/image'
import { CMSLink } from '@/components/Link'

interface PersonalHeroProps {
  name: string
  title: string
  subtitle: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageUrl?: any // Can be string URL or media object
  primaryCTA?: {
    label: string
    url: string
  }
  secondaryCTA?: {
    label: string
    url: string
  }
  stats?: Array<{
    value: string
    label: string
  }>
}

export const PersonalHero = ({
  name,
  title,
  subtitle,
  description,
  imageUrl,
  primaryCTA,
  secondaryCTA,
  stats,
}: PersonalHeroProps) => (
  <section className="pb-16 px-8">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">{name}</h1>
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600">{title}</h2>
              <p className="text-xl text-gray-600 font-medium">{subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">{description}</p>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap gap-8 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCTA && (
              <CMSLink
                {...primaryCTA}
                appearance="default"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-none hover:bg-blue-700 transition-colors"
              />
            )}
            {secondaryCTA && (
              <CMSLink
                {...secondaryCTA}
                appearance="outline"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-none hover:bg-blue-600 hover:text-white transition-colors"
              />
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          {imageUrl ? (
            <div className="relative w-[500px] h-[600px]">
              <Image
                src={typeof imageUrl === 'string' ? imageUrl : imageUrl.url || imageUrl.filename}
                alt={name}
                width={500}
                height={600}
                className="w-full h-full object-cover rounded-none shadow-2xl"
                style={{ borderRadius: 0 }}
              />
            </div>
          ) : (
            <div className="w-[500px] h-[600px] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center rounded-none shadow-2xl">
              <div className="text-center text-blue-600">
                <div className="text-6xl mb-4">👨‍🎓</div>
                <p className="text-lg font-medium">Professional Photo</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
)
