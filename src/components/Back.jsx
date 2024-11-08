'use client'

import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

export default function ContactUs() {
  const [searchQuery, setSearchQuery] = useState('')

  const socialPlatforms = [
    { name: 'Twitter', icon: <FaTwitter className="w-6 h-6 text-blue-500" /> },
    { name: 'Instagram', icon: <FaInstagram className="w-6 h-6 text-pink-500" /> },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-6 h-6 text-blue-700" /> },
    { name: 'YouTube', icon: <FaYoutube className="w-6 h-6 text-red-500" /> },
    { name: 'WhatsApp', icon: <FaWhatsapp className="w-6 h-6 text-green-500" /> },
    { name: 'Facebook', icon: <FaFacebook className="w-6 h-6 text-blue-800" /> },
  ]

  return (
    <div className="bg-gradient-to-br mb-20 from-indigo-50 via-white to-pink-50 min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto mt-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Content */}
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Discover Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Perfect Stay
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl">
              Personalize your living experience. From cozy apartments to spacious houses, find the ideal space that feels like home.
            </p>

            {/* Get in Touch Button */}
            <div className="relative max-w-md">
            <button className=" bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-md text-xl hover:bg-[#0095d1] transition-colors duration-300">
            Get in touch
          </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-10 h-[300px] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl p-4 overflow-visible flex justify-center items-center">
            <img
              src="/hero/hero.png"
              alt="People relaxing on a yellow couch"
              width={500}
              height={500}
              className="object-contain drop-shadow-lg transform scale-110 -translate-y-8"
            />
          </div>
        </div>

        {/* Connect With Us Section */}
        <div className="mt-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Connect With Us</h2>

          {/* Social Media Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {socialPlatforms.map((platform) => (
              <button
                key={platform.name}
                className="flex items-center justify-between w-full text-left hover:bg-purple-50 border border-gray-300 px-4 py-2 rounded-lg"
              >
                <div className="flex items-center">
                  {platform.icon}
                  <span className="ml-2">{platform.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
