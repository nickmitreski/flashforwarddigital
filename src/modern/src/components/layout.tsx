import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Chatbot } from './Chatbot'
import { MAIN_NAVIGATION } from '../constants/navigation'

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleGoBack = () => {
    // Navigate to root and force a reload to reset state
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-black w-full">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b ${
          isScrolled ? 'bg-black/80 backdrop-blur-lg border-[#008CFF]/30' : 'border-transparent'
        }`}
      >
        <nav className="w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0">
              <button 
                onClick={handleGoBack}
                className="px-6 py-2.5 bg-gray-950/50 backdrop-blur-sm text-white/90 hover:text-white border border-[#008CFF]/20 hover:border-[#008CFF]/50 rounded-full transition-all duration-300 font-medium text-sm hover:scale-105"
              >
                Go Back
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {MAIN_NAVIGATION.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 font-medium text-sm group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#008CFF] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/80 hover:text-white p-2 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {MAIN_NAVIGATION.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2.5 text-white/80 hover:text-white hover:bg-[#008CFF]/10 rounded-lg transition-all duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="w-full">{children}</main>

      {/* Add Chatbot */}
      <Chatbot />
    </div>
  )
} 