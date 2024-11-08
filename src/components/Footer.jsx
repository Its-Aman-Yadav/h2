import { Facebook, Youtube, Linkedin, Instagram, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <footer className="bg-[#e6f7ff] px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Address Section */}
          <div className="lg:col-span-1">
            <Image
              src="/hero/safe.jpg"
              alt="Zolo Logo"
              width={120}
              height={40}
              className="mb-6"
            />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Corporate Office</h3>
              <address className="not-italic text-gray-600 space-y-2">
                <p>Noida, Uttar Pradesh</p>
                <p>India</p>
              </address>
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">About</h3>
            <ul className="space-y-3">
              {["FAQs", "How it Works", "List Your Property", "Zo-Tales", "Amenities", "Testimonials"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Explore</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Careers",
                "Contact Us",
                "Blog",
                "Privacy Policy",
                "T&C",
                "Disclaimers",
                "Sitemap",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600" />
                <Link href="tel:+918884518010" className="text-gray-600 hover:text-gray-900">
                  +91 99999999
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600" />
                <Link href="mailto:info@zolostays.com" className="text-gray-600 hover:text-gray-900">
                  info@safehaven.com
                </Link>
              </div>
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Stay In Touch</h4>
                <div className="flex gap-4">
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <Youtube className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <Instagram className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Scan the QR
              <br />
              to join our Whatsapp Community
            </h3>
            <Image
              src="/placeholder.svg"
              alt="QR Code"
              width={200}
              height={200}
              className="border-4 border-white rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}