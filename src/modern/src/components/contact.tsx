import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const sectionRef = useRef<HTMLElement>(null)
  
  // Initialize motion values for parallax effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 30,
    mass: 1
  })
  
  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 30,
    mass: 1
  })
  
  const textSpringX = useSpring(useTransform(mouseX, x => x * -0.3), {
    stiffness: 100,
    damping: 30,
    mass: 1
  })
  
  const textSpringY = useSpring(useTransform(mouseY, y => y * -0.3), {
    stiffness: 100,
    damping: 30,
    mass: 1
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      // Calculate mouse position relative to center (-1 to 1)
      const x = (clientX - innerWidth / 2) / innerWidth
      const y = (clientY - innerHeight / 2) / innerHeight
      
      // Update motion values
      mouseX.set(x * 20)
      mouseY.set(y * 20)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="relative py-24 border-t border-[#008CFF]/30">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 bg-black z-[1]"
        style={{ 
          opacity: 0.7,
          x: springX,
          y: springY
        }}
      />
      
      {/* Gradient Background with Parallax */}
      <motion.div 
        className="gradient-bg z-[2]"
        style={{ 
          x: useSpring(useTransform(springX, x => x * -0.3), {
            stiffness: 100,
            damping: 30,
            mass: 1
          }),
          y: useSpring(useTransform(springY, y => y * -0.3), {
            stiffness: 100,
            damping: 30,
            mass: 1
          })
        }}
      />

      <motion.div 
        className="relative z-[5] w-full"
        style={{
          x: textSpringX,
          y: textSpringY
        }}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-3xl font-light text-white/90 max-w-5xl mx-auto text-center">
            <motion.p 
              className="leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Let's{' '}
              <span className="text-[#008CFF]">work together</span>{' '}
              to create something extraordinary.
            </motion.p>

            <motion.p 
              className="leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Your vision +{' '}
              <span className="text-[#7b2dbd]">our expertise</span>{' '}
              ={' '}
              <span className="text-yellow-400">digital magic</span>
            </motion.p>

            <motion.p 
              className="leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to{' '}
              <span className="text-red-400">transform</span>{' '}
              your online presence?
            </motion.p>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="mt-32 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gray-950 rounded-2xl p-8 border border-[#008CFF]/20">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-light text-white/80 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-[#008CFF]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#008CFF]/50 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-light text-white/80 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-[#008CFF]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#008CFF]/50 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-light text-white/80 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-[#008CFF]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#008CFF]/50 focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-light text-white/80 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-[#008CFF]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#008CFF]/50 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <div className="text-center">
                  <button type="submit" className="shiny-cta">
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
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
      </motion.div>
    </section>
  )
} 