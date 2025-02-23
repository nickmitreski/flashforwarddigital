import { useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import bg3 from '../assets/3.png'
import { motion, useScroll, useTransform } from 'framer-motion'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black border-b border-[#008CFF]/30">
      {/* Fixed Background with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${bg3})`,
          backgroundAttachment: 'fixed'
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-black/50"
        style={{ opacity }}
      /> {/* Dark overlay */}
      
      {/* Gradient Background */}
      <div className="gradient-bg z-[2]" />
      
      <div className="relative z-[5] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.04, 0.62, 0.23, 0.98]
                  }}
                >
                  <span className="font-extralight">Websites that drive</span> <span className="font-medium bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent gradient-animate">leads</span>.
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.04, 0.62, 0.23, 0.98]
                  }}
                >
                  <span className="font-extralight">Branding that</span> <span className="font-medium bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent gradient-animate">engages</span>.
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.04, 0.62, 0.23, 0.98]
                  }}
                >
                  <span className="font-extralight">Content that</span> <span className="font-medium bg-gradient-to-r from-orange-400 via-pink-500 to-rose-600 bg-clip-text text-transparent gradient-animate">converts</span>.
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0.04, 0.62, 0.23, 0.98]
                  }}
                >
                  <span className="font-extralight">AI that automates</span> <span className="font-medium bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 bg-clip-text text-transparent gradient-animate">growth</span>.
                </motion.div>
              </div>
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up mt-16" style={{ animationDelay: '1000ms' }}>
            <button className="inline-flex items-center px-12 py-4 rounded-full border-2 border-gray-700 hover:border-blue-500/50 bg-gray-900/50 text-gray-300 hover:text-white transition-all duration-300 text-xl">
              <span>Watch Video</span>
              <ChevronRight className="ml-2 h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 left-1/4 w-96 h-96 bg-[#008CFF]/5 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-[#008CFF]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  )
} 