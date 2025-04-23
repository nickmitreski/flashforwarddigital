/**
 * Stats Section Component
 * Displays a grid of animated statistics with heading and subheading
 */

import { StatCard } from './StatCard'
import { StatsData } from '../types/stats'
import { motion } from 'framer-motion'

const statsData: StatsData = {
  heading: "Elevate Your Digital Presence",
  subheading: "In today's digital landscape, a well-crafted website is essential for business success. Our data-driven approach combines cutting-edge design with AI-powered solutions.",
  stats: [
    {
      value: 94,
      label: "First Impressions",
      description: "Percentage of first impressions that are design-related, highlighting the crucial role of professional web design.",
      suffix: "%",
      colorClass: "from-blue-400 via-blue-500 to-blue-600"
    },
    {
      value: 47,
      label: "Loading Speed",
      description: "Percentage of users who expect websites to load in 2 seconds or less, emphasizing the importance of performance.",
      suffix: "%",
      colorClass: "from-yellow-400 via-yellow-500 to-yellow-600"
    },
    {
      value: 85,
      label: "AI Implementation",
      description: "Percentage of businesses reporting increased efficiency after implementing AI solutions in their digital strategy.",
      suffix: "%",
<<<<<<< HEAD
      colorClass: "from-[#FF1493] via-[#FF1493] to-[#FF1493]"
=======
      colorClass: "from-pink-400 via-pink-500 to-pink-600"
>>>>>>> 32603a7d2d85d011e99b8ec884c4ddbe07708848
    },
    {
      value: 73,
      label: "Brand Impact",
      description: "Percentage increase in revenue when businesses maintain consistent branding across all platforms.",
      suffix: "%",
      colorClass: "from-emerald-400 via-emerald-500 to-emerald-600"
    }
  ]
}

export function Stats() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center mb-16">
          <div className="space-y-4 text-3xl font-light text-white/90 max-w-5xl mx-auto text-center">
            <motion.p 
              className="leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
<<<<<<< HEAD
              <span className="text-[#008CFF]">Elevate</span> Your Digital <span className="text-[#FF1493]">Presence</span>{' '}
=======
              <span className="text-[#008CFF]">Elevate</span> Your Digital <span className="text-pink-400">Presence</span>{' '}
>>>>>>> 32603a7d2d85d011e99b8ec884c4ddbe07708848
              that drives growth.
            </motion.p>

            <motion.p 
              className="leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              From{' '}
              <span className="text-yellow-400">modern design</span>{' '}
              to{' '}
              <span className="text-red-400">AI solutions</span>,
            </motion.p>

            <motion.p 
              className="leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              we transform your website into{' '}
              <span className="text-[#7b2dbd]">business success</span>.
            </motion.p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
} 