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
          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[0.95] tracking-tight">
                {name.split(' ').map((word, index) => (
                  <span key={index} className="inline-block">
                    {word}
                    {index === 0 && (
                      <div className="absolute -bottom-2 left-0 w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 rounded-full" />
                    )}
                  </span>
                ))}
              </h1>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-700 tracking-tight">
                {title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium tracking-normal">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="relative">
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {description}
            </p>
          </div>

          {/* Enhanced Stats with Responsive Layout */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap justify-start gap-4 sm:gap-6 py-4 sm:py-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group w-32 sm:w-36 lg:w-40 p-4 sm:p-5 bg-white/50 border border-slate-200/40 rounded-xl hover:bg-white/70 hover:shadow-lg hover:border-slate-300/60 transition-all duration-300"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 text-center">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-slate-600 font-medium tracking-normal text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {primaryCTA && (
              <CMSLink
                {...primaryCTA}
                appearance="default"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all duration-300 text-base text-center"
              />
            )}
            {secondaryCTA && (
              <CMSLink
                {...secondaryCTA}
                appearance="outline"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-400 text-slate-700 font-semibold rounded-xl hover:border-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all duration-300 text-base text-center"
              />
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-4 sm:pb-8 relative z-20">
        <div className="flex flex-col items-center space-y-2 px-4 py-2 rounded-lg">
          <span className="text-sm text-white font-semibold tracking-wide uppercase animate-pulse">
            Scroll
          </span>
          <div className="w-0.5 h-6 sm:h-8 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  </section>
)
