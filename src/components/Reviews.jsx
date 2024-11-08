// components/Component.js
'use client'

import React, { useEffect, useRef } from 'react'

export default function Component() {
  const containerRef = useRef(null)

  const testimonials = [
    {
      name: 'ANANYA MEHTA',
      quote: 'Living here has brought balance and joy to my daily routine!',
      title: 'Content Creator',
      bgColor: 'bg-orange-100',
    },
    {
      name: 'RISHABH SHARMA',
      quote: 'This place has everything I need to stay focused and relaxed!',
      title: 'Graphic Designer',
      bgColor: 'bg-yellow-100',
    },
    {
      name: 'PRIYA CHAUDHARY',
      quote: 'A vibrant community and an inspiring workspace – I love it here!',
      title: 'Product Manager',
      bgColor: 'bg-orange-200',
    },
    {
      name: 'AMIT DESAI',
      quote: 'Amazing facilities, great vibe, and the perfect place to connect!',
      title: 'Software Developer',
      bgColor: 'bg-yellow-200',
    },
    {
      name: 'NEHA RAO',
      quote: 'Co-living here has been an absolute game-changer for my work-life balance.',
      title: 'Marketing Specialist',
      bgColor: 'bg-orange-300',
    },
    {
      name: 'RAHUL KAPOOR',
      quote: 'A community that feels like family, and amenities that make life easy!',
      title: 'Entrepreneur',
      bgColor: 'bg-yellow-300',
    },
    {
      name: 'SIMRAN SINGH',
      quote: 'From peace and quiet to fun hangouts, it’s the best of both worlds!',
      title: 'UX Designer',
      bgColor: 'bg-orange-400',
    },
  ]

  return (
    <div className="relative min-h-screen py-20 px-4 mt-20 md:px-8" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium text-center text-gray-800 mb-12">
          Let&apos;s hear it from
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500"> our community</span>
        </h1>

        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-infinite-scroll testimonials-wrapper">
            {/* Duplicate testimonials for infinite scroll */}
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[300px] h-[200px] ${testimonial.bgColor} p-6 rounded-lg shadow-lg transition-transform hover:scale-105`}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {testimonial.name}
                </h2>
                <p className="text-lg font-light text-gray-700 mb-1">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite scroll animation and styles */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 30s linear infinite;
        }
        .testimonials-wrapper {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  )
}
