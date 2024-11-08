import React from 'react'
import Image from 'next/image'

export default function Component() {
  return (
    <div className="relative w-full mt-20 h-[400px] overflow-visible bg-[#fff7e6] rounded-lg">
      <div className="absolute inset-0 flex items-center">
        <div className="w-[55%] relative h-full overflow-visible">
          <Image
            src="/hero/4.png"
            alt="Friends taking selfie"
            fill
            className="object-cover object-center scale-110 -translate-x-4"
            priority
          />
        </div>
        <div className="w-1/2 px-8 space-y-6 z-10">
          <h1 className="text-5xl font-medium leading-tight">
            Join Us
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              {' '}
              Now!
            </span>
          </h1>

          <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 rounded-md text-xl transition-colors duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  )
}
