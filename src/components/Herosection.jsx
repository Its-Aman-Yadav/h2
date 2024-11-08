// components/YourComponent.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import FlipWords from "@/components/ui/flip-words"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa'

export default function Component() {
  const [textIndex, setTextIndex] = useState(0)
  const texts = [
    "Make your own food",
    "Take a subscription",
    "Live your way",
    "Choose your style"
  ]

  const  words = ["better", "cute", "beautiful", "modern"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      <main className="container mt-10 mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold text-gray-800">
            Your Stay. <span className="text-[#00A6E6]">Your Way.</span>
            {/* <FlipWords words={words} className="text-blue-500 text-3xl"/> */}
          </h1>

          
      
    
 


          <div className="border border-gray-300 bg-yellow-100 rounded-lg p-4 h-12 flex items-center justify-center">
            <p
              key={textIndex}
              className="text-xl text-gray-600 transition-opacity duration-500 ease-in-out opacity-0 animate-fadeInUp"
              style={{ opacity: 1 }}
            >
              {texts[textIndex]}
            </p>
          </div>

          <div className="relative">
             <button className="bg-[#00A6E6] text-white px-6 py-2 rounded">
            Get in Touch
          </button>
          </div>
        </div>

        <div className="relative mt-10 h-[300px] bg-[#E6F7FF] rounded-2xl p-4 overflow-visible flex justify-center items-center">
          <Image
            src="/hero/hero.png"
            alt="People relaxing on a yellow couch"
            width={900} // Make the image larger to extend outside the container
            height={500} 
            className="object-contain drop-shadow-lg transform scale-110 -translate-y-8" // Scale up and position the image
          />
        </div>
      </main>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
          {[
            { name: 'Facebook', icon: <FaFacebook />, color: '#3b5998' },
            { name: 'Twitter', icon: <FaTwitter />, color: '#1da1f2' },
            { name: 'Instagram', icon: <FaInstagram />, color: '#e1306c' },
            { name: 'LinkedIn', icon: <FaLinkedin />, color: '#0077b5' },
            { name: 'YouTube', icon: <FaYoutube />, color: '#ff0000' },
            { name: 'WhatsApp', icon: <FaWhatsapp />, color: '#25d366' },
          ].map((social) => (
            <Link
              key={social.name}
              href={`/${social.name.toLowerCase()}`}
              className="group flex flex-col items-center gap-2"
            >
              <div
                className="text-gray-400 transition-transform transform group-hover:scale-125 group-hover:text-[currentColor] group-hover:drop-shadow-lg"
                style={{ color: social.color }}
              >
                {React.cloneElement(social.icon, { size: 32 })}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
