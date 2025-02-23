import { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'

interface StatProps {
  value: number
  label: string
  description: string
  prefix?: string
  suffix?: string
}

function StatCard({ value, label, description, prefix = '', suffix = '' }: StatProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const startTimeRef = useRef<number>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const startAnimation = () => {
    startTimeRef.current = Date.now()
    const duration = 2000 // 2 seconds
    const animate = () => {
      const now = Date.now()
      const elapsed = now - (startTimeRef.current || 0)
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setDisplayValue(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }
    animate()
  }

  // Get color based on index
  const getColorClass = (index: number) => {
    switch (index) {
      case 0:
        return 'from-blue-400 via-indigo-500 to-purple-600' // Blue color
      case 1:
        return 'from-yellow-400 via-amber-500 to-orange-400' // Yellow color
      case 2:
        return 'from-red-400 via-pink-500 to-rose-600' // Red color
      case 3:
        return 'from-emerald-400 via-teal-500 to-cyan-600' // Green color
      default:
        return 'from-blue-400 via-indigo-500 to-purple-600'
    }
  }

  // Get border color based on value
  const getBorderColor = () => {
    if (value === 400) return 'rgba(0, 140, 255, 0.3)' // Blue
    if (value === 23) return 'rgba(250, 204, 21, 0.3)' // Yellow
    if (value === 40) return 'rgba(248, 113, 113, 0.3)' // Red
    return 'rgba(52, 211, 153, 0.3)' // Green
  }

  return (
    <div
      ref={elementRef}
      className="relative bg-gray-950/50 backdrop-blur-sm rounded-2xl p-8 h-full border hover:border-2 transition-all duration-300 group hover:scale-105"
      style={{
        borderColor: getBorderColor()
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className={`text-5xl font-medium bg-gradient-to-r ${getColorClass(value === 400 ? 0 : value === 23 ? 1 : value === 40 ? 2 : 3)} bg-clip-text text-transparent mb-2`}>
          {prefix}
          {displayValue.toLocaleString()}
          {suffix}
        </div>
        <div className="text-xl font-medium text-white mb-2">{label}</div>
        <div className="text-lg text-white/60 font-light group-hover:text-white/80 transition-colors duration-300">{description}</div>
      </div>
    </div>
  )
}

const stats = [
  {
    value: 400,
    label: 'Higher Conversions',
    description: 'Website designs can increase conversion rates by up to 400%.',
    suffix: '%',
  },
  {
    value: 23,
    label: 'Revenue Growth',
    description: 'Businesses with consistent branding see up to 23% increase in revenue.',
    suffix: '%',
  },
  {
    value: 40,
    label: 'AI-Powered Productivity',
    description: 'Companies integrating AI experience a 40% boost in efficiency.',
    suffix: '%',
  },
  {
    value: 63,
    label: 'AI Implementation Success',
    description: 'Businesses report 63% higher conversion rates after implementing AI-powered features.',
    suffix: '%',
  }
]

export function Stats() {
  return (
    <section id="stats" className="relative py-24 border-t border-b border-[#008CFF]/30">
      {/* Fixed Background with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black"
        style={{ 
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      
      {/* Gradient Background */}
      <div className="gradient-bg z-[2]" />

      <div className="relative z-[5] w-full">
        <div className="space-y-4 text-3xl font-light text-white/90 max-w-5xl mx-auto text-center">
          <motion.p 
            className="leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            The{' '}
            <span className="text-[#008CFF]">digital transformation</span>{' '}
            landscape is evolving.
          </motion.p>

          <motion.p 
            className="leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Modern businesses leverage{' '}
            <span className="text-yellow-400">AI and automation</span>{' '}
            to achieve{' '}
            <span className="text-red-400">remarkable growth</span>.
          </motion.p>

          <motion.p 
            className="leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Here are the{' '}
            <span className="text-[#7b2dbd]">latest industry statistics</span>{' '}
            on digital success:
          </motion.p>
        </div>
        
        <div className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-1/4 left-1/4 w-96 h-96 bg-[#4f2d99]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-[#7b2dbd]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  )
} 