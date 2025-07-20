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
  <section className="relative h-screen sm:h-[93vh] flex items-center overflow-hidden w-screen left-1/2 -translate-x-1/2 -mt-0">
    {/* Background Image */}
    {imageUrl && (
      <div className="absolute inset-0 w-screen">
        <Image
          src={typeof imageUrl === 'string' ? imageUrl : imageUrl.url || imageUrl.filename}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>
    )}

    {/* Animated Grid Pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.08)_1px,transparent_0)] bg-[size:32px_32px] animate-pulse" />

    {/* Mobile White Overlay for Readability */}
    <div className="absolute inset-0 bg-white/60 sm:bg-transparent" />

    <div className="relative z-10 px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between w-full max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center flex-1 pt-8 sm:pt-16">
        {/* Content */}
        <div className="lg:col-span-12 space-y-4 sm:space-y-6">
          {/* Name with Animated Underline */}
          <div className="space-y-3 sm:space-y-4">
            <div className="relative">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-slate-800 leading-[1.1] tracking-wide">
                {name.split(' ').map((word, index) => (
                  <span key={index} className="inline-block">
                    {word}
                    {index === 0 && (
                      <div className="absolute -bottom-1 left-0 w-12 sm:w-16 h-0.5 bg-slate-400 rounded-full" />
                    )}
                  </span>
                ))}
              </h1>
            </div>

            <div className="space-y-1">
              <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-slate-600 tracking-wide">
                {title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-light tracking-wide">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="relative">
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-xl font-light">
              {description}
            </p>
          </div>

          {/* Enhanced Stats with Responsive Layout */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap justify-start gap-3 sm:gap-4 py-3 sm:py-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group w-28 sm:w-32 lg:w-36 p-3 sm:p-4 bg-white/40 border border-slate-200/30 rounded-lg hover:bg-white/60 hover:shadow-sm transition-all duration-300"
                >
                  <div className="text-lg sm:text-xl lg:text-2xl font-light text-slate-800 mb-1 text-center">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-slate-500 font-light tracking-wide text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {primaryCTA && (
              <CMSLink
                {...primaryCTA}
                appearance="default"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-800 text-white font-light rounded-lg hover:bg-slate-700 transition-all duration-300 text-sm text-center"
              />
            )}
            {secondaryCTA && (
              <CMSLink
                {...secondaryCTA}
                appearance="outline"
                className="px-4 sm:px-6 py-2 sm:py-3 border border-slate-300 text-slate-600 font-light rounded-lg hover:border-slate-400 hover:text-slate-800 transition-all duration-300 text-sm text-center"
              />
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-4 sm:pb-8 relative z-20">
        <div className="flex flex-col items-center space-y-2 px-4 py-2 rounded-lg">
          <span className="text-xs text-white font-medium tracking-widest uppercase animate-pulse">
            Scroll
          </span>
          <div className="w-0.5 h-6 sm:h-8 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  </section>
)
