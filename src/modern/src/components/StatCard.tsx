/**
 * StatCard Component
 * Displays an animated statistic card with visual effects
 */

import { useEffect, useState, useRef } from 'react'
import { StatProps } from '../types/stats'
import { formatNumber } from '../utils/helpers'

export function StatCard({ value, label, description, prefix = '', suffix = '', colorClass }: StatProps) {
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
    animationRef.current = requestAnimationFrame(animate)
  }

  // Get color based on provided class or default
  const getColorClass = () => {
    return colorClass || 'from-blue-400 via-indigo-500 to-purple-600'
  }

  // Get border color based on value
  const getBorderColor = () => {
    if (value === 94) return 'rgba(0, 140, 255, 0.3)' // Blue
    if (value === 47) return 'rgba(250, 204, 21, 0.3)' // Yellow
    if (value === 85) return 'rgba(236, 72, 153, 0.3)' // Pink
    return 'rgba(16, 185, 129, 0.3)' // Emerald/Green
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
        <div className={`text-5xl font-medium bg-gradient-to-r ${getColorClass()} bg-clip-text text-transparent mb-2`}>
          {prefix}
          {formatNumber(displayValue)}
          {suffix}
        </div>
        <div className="text-xl font-medium text-white mb-2">{label}</div>
        <div className="text-lg text-white/60 font-light group-hover:text-white/80 transition-colors duration-300">{description}</div>
      </div>
    </div>
  )
} 