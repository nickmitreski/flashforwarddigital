import { useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const navItems = [
  { name: 'Home', href: 'hero' },
  { name: 'Services', href: 'services' },
  { name: 'About', href: 'about' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Contact', href: 'contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 cursor-pointer px-4 py-1 bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] active:border-[#808080] active:border-r-[#ffffff] active:border-b-[#ffffff]"
          >
            <span className="text-black font-[system-ui]">Time Travel</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button className="group relative inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white overflow-hidden transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600" />
              <span className="relative">Book a Call</span>
              <ChevronRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                {item.name}
              </button>
            ))}
            <button className="w-full mt-4 group relative inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white overflow-hidden transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600" />
              <span className="relative">Book a Call</span>
              <ChevronRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
} 