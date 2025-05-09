import { Check, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const plans = [
  {
    name: 'Essential',
    price: 999,
    description: 'Perfect for small businesses looking to establish their digital presence.',
    features: [
      'Custom Website Design',
      'Mobile Responsive',
      'Basic SEO Setup',
      '3 Pages',
      'Contact Form',
      'Social Media Integration',
      '1 Month Support',
      'Basic Analytics',
    ],
    color: 'text-[#008CFF]',
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: 1999,
    description: 'Ideal for growing businesses ready to expand their digital footprint.',
    features: [
      'Everything in Essential, plus:',
      'Up to 8 Pages',
      'Advanced SEO Package',
      'Blog Setup',
      'Email Marketing Integration',
      'Performance Optimization',
      '3 Months Support',
      'Detailed Analytics',
    ],
    color: 'text-yellow-400',
    gradient: 'from-yellow-400 via-amber-500 to-orange-400',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 3999,
    description: 'Comprehensive solution for established businesses seeking digital excellence.',
    features: [
      'Everything in Growth, plus:',
      'Unlimited Pages',
      'E-commerce Integration',
      'Custom Functionality',
      'Priority Support',
      'Advanced Security',
      '6 Months Support',
      'Custom Analytics',
    ],
    color: 'text-emerald-400',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    highlighted: false,
  },
]

export function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ 
          backgroundImage: `url(/backgrounds/hero-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-3xl font-light text-white/90 max-w-5xl mx-auto text-center">
          <motion.p 
            className="leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Transparent pricing that{' '}
            <span className="text-[#008CFF]">makes sense</span>.
          </motion.p>

          <motion.p 
            className="leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            No hidden fees. No surprises. Just{' '}
            <span className="text-[#7b2dbd]">clear value</span>{' '}
            for your investment.
          </motion.p>

          <motion.p 
            className="leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the plan that fits your{' '}
            <span className="text-yellow-400">vision</span>{' '}
            and{' '}
            <span className="text-red-400">goals</span>.
          </motion.p>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative transform-style-preserve-3d"
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              onClick={() => setSelectedPlan(plan.name === selectedPlan ? null : plan.name)}
            >
              <motion.div
                className={`group relative bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border 
                  ${plan.highlighted ? `border-${plan.color}/50 shadow-lg shadow-${plan.color}/10` : 'border-gray-800'}
                  transition-all duration-300 hover:border-${plan.color}/50 hover:shadow-lg hover:shadow-${plan.color}/10
                  cursor-pointer`}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  z: 50
                }}
                animate={{
                  scale: selectedPlan === plan.name ? 1.05 : 1,
                  z: selectedPlan === plan.name ? 50 : 0
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {plan.highlighted && (
                  <motion.div 
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r ${plan.gradient} rounded-full text-sm font-medium text-white`}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Most Popular
                  </motion.div>
                )}
                
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl`}
                  style={{ 
                    opacity: hoveredPlan === plan.name ? 0.2 : 0,
                    transform: "translateZ(-10px)"
                  }}
                />
                
                <div className="relative">
                  <motion.h3 
                    className={`text-2xl font-medium ${plan.color} mb-2`}
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {plan.name}
                  </motion.h3>
                  <motion.div 
                    className="flex items-baseline mb-6"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <span className="text-5xl font-light text-white">${plan.price}</span>
                    <span className="ml-2 text-gray-400">/project</span>
                  </motion.div>
                  <motion.p 
                    className="text-gray-400 mb-8"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {plan.description}
                  </motion.p>
                  <motion.ul 
                    className="space-y-4 mb-8"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <Check className="h-5 w-5 mr-3 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </motion.ul>
                  <motion.button 
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r ${plan.gradient} text-white font-medium`}
                    style={{ transform: "translateZ(20px)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}