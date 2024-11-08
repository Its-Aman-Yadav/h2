// components/FloatingNavbar.js
'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function FloatingNavbar() {
  const [position, setPosition] = useState({ x: 0, y: 20 }) // Start position centered at the top
  const [isDragging, setIsDragging] = useState(false)
  const navbarRef = useRef(null)

  useEffect(() => {
    // Center the navbar horizontally based on the viewport width
    const navbar = navbarRef.current
    if (navbar) {
      const rect = navbar.getBoundingClientRect()
      setPosition({
        x: (window.innerWidth - rect.width) / 2,
        y: 20, // Distance from the top
      })
    }
  }, [])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    const navbar = navbarRef.current
    if (navbar) {
      const rect = navbar.getBoundingClientRect()
      navbar.dataset.offset = JSON.stringify({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return

    const navbar = navbarRef.current
    if (navbar) {
      const offset = JSON.parse(navbar.dataset.offset || '{}')
      const newX = e.clientX - offset.x
      const newY = e.clientY - offset.y
      setPosition({ x: newX, y: newY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return (
    <motion.div
      ref={navbarRef}
      className="fixed z-50 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full cursor-move shadow-lg backdrop-blur-sm bg-opacity-90"
      style={{ top: position.y, left: position.x }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      onMouseDown={handleMouseDown}
      drag
      dragMomentum={false}
    >
      <nav className="flex items-center justify-between w-full">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/hero/safe.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
          <span className="font-bold text-lg"></span>
        </div>

        {/* Center Navigation Links */}
        <div className="flex space-x-6 mr-10 ml-10 items-center mx-auto">
          {['Home', 'About', 'Explore'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-indigo-200 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* "Get in Touch" Button */}
        <motion.button
          className="bg-white text-purple-600 font-medium px-4 py-2 rounded-full shadow-md hover:bg-indigo-100 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '#contact'} // Link to contact or any relevant section
        >
          Get in Touch
        </motion.button>
      </nav>
    </motion.div>
  )
}
