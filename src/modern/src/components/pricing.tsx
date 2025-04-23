import { Check, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
<<<<<<< HEAD
=======
import bg3 from '../assets/backgrounds/hero-bg.png'
>>>>>>> 32603a7d2d85d011e99b8ec884c4ddbe07708848

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
<<<<<<< HEAD
    color: 'text-emerald-400',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
=======
    color: 'text-pink-400',
    gradient: 'from-pink-400 via-fuchsia-500 to-pink-600',
>>>>>>> 32603a7d2d85d011e99b8ec884c4ddbe07708848
    highlighted: false,
  },
]

export function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
<<<<<<< HEAD
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background Image */}
=======
    <section id="pricing" className="relative py-24 bg-gray-100">
      {/* Background Image - Fixed effect removed */}
>>>>>>> 32603a7d2d85d011e99b8ec884c4ddbe07708848
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ 
<<<<<<< HEAD
          backgroundImage: `url(/backgrounds/hero-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

=======
          backgroundImage: `url(${bg3})`
        }}
      />
      {/* Dark overlay - REMOVED */}
      
>>>>>>> 32603a7d2d85d011e99b8ec884c4ddbe07708848
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
                    <span className="text-4xl font-medium text-white">${plan.price}</span>
                    <span className="ml-2 text-white/60">/project</span>
                  </motion.div>
                  <motion.p 
                    className="text-white/80 mb-8"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {plan.description}
                  </motion.p>
                  
                  <motion.ul 
                    className="space-y-4 mb-8"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <Check className={`w-5 h-5 ${plan.color} mr-3 mt-0.5 flex-shrink-0`} />
                        <span className="text-white/80">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  <motion.button 
                    className={`shiny-cta w-full bg-gradient-to-r ${plan.gradient}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <span>Get Started</span>
                  </motion.button>
                </div>

                {selectedPlan === plan.name && (
                  <motion.div
                    className="absolute inset-0 bg-[#008CFF]/5 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ transform: "translateZ(-20px)" }}
                  />
                )}
              </motion.div>

              {/* Floating elements around the card - REMOVED */}
            </motion.div>
          ))}
        </div>
        
        {/* Custom Solutions Section */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p 
            className="text-3xl font-light text-white/90 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Need a{' '}
            <span className="text-[#008CFF]">custom solution</span>?{' '}
            Let's talk.
          </motion.p>
          <motion.button 
            className="shiny-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Us</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements - REMOVED */}
    </section>
  )
}