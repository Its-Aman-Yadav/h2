import React from 'react';
import Image from 'next/image';

export default function Component() {
  return (
    <div className="relative w-full mt-20 h-[400px] overflow-hidden bg-[#E5F7FF] rounded-lg">
      <div className="flex items-center justify-between h-full">
        {/* Content Section */}
        <div className="w-1/2 px-8 space-y-6">
<h1 className="text-5xl font-medium leading-tight text-gray-800">
  Let&apos;s make some{' '}
  <span className="text-[#00A6E6]">Memories!</span>
</h1>

          <button className="bg-[#00A6E6] text-white px-8 py-3 rounded-md text-xl hover:bg-[#0095d1] transition-colors duration-300">
            Get in touch
          </button>
        </div>

        {/* Image Section */}
        <div className="w-1/2 relative">
          <Image
            src="/hero/4.png"
            alt="Friends taking selfie"
            layout="fill"  // Changed to 'fill' to ensure it covers the assigned area
            className="object-cover object-center scale-125 -translate-x-10 -translate-y-10 rotate-6"
            priority
          />
        </div>
      </div>
    </div>
  )
}
