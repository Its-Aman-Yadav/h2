'use client'

import React from 'react'
import Image from 'next/image'

export default function Component() {
  return (
    <div className="container mx-auto mt-20 px-4 py-8 mb-4 space-y-16">
      {/* Find Easy Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-[#FFE8D6] rounded-2xl p-10 relative overflow-visible">
          <div className="relative z-20">
            <h2 className="text-4xl font-semibold mb-4 leading-tight text-gray-800 tracking-wide">
              EXPLORE<br />
              <span className="text-[#d97706] font-bold">WITH EASE</span>
            </h2>
          </div>
          <Image
            src="/hero/1.png"
            alt="Person actively searching with binoculars"
            width={500}
            height={500}
            className="absolute -right-10 bottom-0 transform scale-110 z-10"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-700 tracking-wide">
            Keep it light on the wallet, <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">heavy on the vibes.</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Feature title="Fully Furnished" subtitle="Bring Just Yourself" />
            <Feature title="Loaded Amenities" subtitle="All You Need" />
            <Feature title="WhatsApp Tour" subtitle="Virtual or In-Person" />
            <Feature title="No Middlemen" subtitle="Zero Brokerage" />
            <Feature title="App-Based Search" subtitle="Find It, Love It" />
          </div>
        </div>
      </section>

      {/* Stay Easy Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-700 tracking-wide">
            Designed for the grind, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">perfect for unwinding.</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Feature title="24/7 Support" subtitle="We're Here For You" />
            <Feature title="App-Based Help" subtitle="Fast Solutions" />
            <Feature title="Quick Video Tour" subtitle="Explore Virtually" />
            <Feature title="One Month Deposit" subtitle="No Hidden Costs" />
            <Feature title="Thoughtful Spaces" subtitle="Feel Right at Home" />
          </div>
        </div>
        <div className="bg-pink-100 rounded-2xl p-10 relative overflow-visible">
          <div className="relative z-20">
            <h2 className="text-4xl font-semibold mb-4 leading-tight text-gray-800 tracking-wide">
              WORK<br />
              <span className="text-[#d97706] font-bold">AND RELAX</span>
            </h2>
          </div>
          <Image
            src="/hero/2.png"
            alt="Person meditating and relaxing"
            width={500}
            height={500}
            className="absolute -left-10 bottom-0 transform scale-110 z-10"
          />
        </div>
      </section>

      {/* Bond Easy Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-[#E0F4F4] rounded-2xl p-10 relative overflow-visible">
          <div className="relative z-20">
            <h2 className="text-4xl font-semibold mb-4 leading-tight text-gray-800 tracking-wide">
              CONNECT<br />
              <span className="text-[#d97706] font-bold">WITH COMMUNITY</span>
            </h2>
          </div>
          <Image
            src="/hero/3.png"
            alt="Two people having a great time bonding"
            width={500}
            height={500}
            className="absolute -right-10 bottom-0 transform scale-110 z-10"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-700 tracking-wide">
            Connect & thrive with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">community that vibes.</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Feature title="Choose Your Tribe" subtitle="Find Your People" />
            <Feature title="Social Events" subtitle="Always Something Happening" />
            <Feature title="Collaborate & Grow" subtitle="Build Connections" />
            <Feature title="Get Mentorship" subtitle="Support & Guidance" />
          </div>
        </div>
      </section>
    </div>
  )
}

function Feature({ title, subtitle }) {
  return (
    <div className="p-4 rounded-lg hover:bg-blue-50 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
      <p className="font-semibold text-sm text-gray-800 tracking-wide">{title}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  )
}
