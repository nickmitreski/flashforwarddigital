import { useRef, useState, useEffect } from 'react'
import { ChevronRight, Award, Users, Target, Zap, X } from 'lucide-react'
import { motion, AnimatePresence, useSpring, useTransform, useMotionValue } from 'framer-motion'

const values = [
  {
    title: 'Websites That Convert',
    description: 'Custom-crafted websites that combine stunning design with powerful functionality to drive real business results.',
    icon: Award,
    color: 'text-[#008CFF]',
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
    id: 'websites'
  },
  {
    title: 'Strategic Branding',
    description: 'Create a memorable brand identity that captures attention and builds lasting connections with your audience.',
    icon: Users,
    color: 'text-yellow-400',
    gradient: 'from-yellow-400 via-amber-500 to-orange-400',
    id: 'branding'
  },
  {
    title: 'Content That Engages',
    description: 'Compelling content strategies that tell your story and drive meaningful engagement with your target market.',
    icon: Target,
    color: 'text-red-400',
    gradient: 'from-red-400 via-pink-500 to-rose-600',
    id: 'content'
  },
  {
    title: 'AI-Powered Growth',
    description: 'Leverage cutting-edge AI technology to automate processes and accelerate your business growth.',
    icon: Zap,
    color: 'text-emerald-400',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    id: 'ai'
  },
]

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  color: string
  gradient: string
  id: string
}

function Modal({ isOpen, onClose, title, color, gradient, id }: ModalProps) {
  if (!isOpen) return null

  // Dummy content based on modal type
  const getDummyContent = (id: string) => {
    switch (id) {
      case 'websites':
        return (
          <div className="space-y-8">
            {/* Featured Project */}
            <div className="relative rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
                <span className="text-white/40">Featured Project Image</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden flex items-center justify-center mb-3">
                    <span className="text-white/40">Project {item}</span>
                  </div>
                  <h3 className={`text-lg font-medium ${color} group-hover:scale-105 transition-transform`}>Example Website {item}</h3>
                  <p className="text-white/60 text-sm">E-commerce / Brand / Portfolio</p>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="border-t border-[#008CFF]/30 pt-6">
              <h3 className="text-lg font-medium text-white mb-4">Technologies We Use</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'TypeScript', 'MongoDB'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-gray-900 text-white/60 text-sm border border-[#008CFF]/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      case 'branding':
        return (
          <div className="space-y-8">
            {/* Brand Showcase */}
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-square bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl flex items-center justify-center">
                <span className="text-white/40">Brand Identity</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-white/40">Asset {item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Elements */}
            <div className="grid grid-cols-3 gap-6">
              {['Typography', 'Color Palette', 'Logo Variations'].map((element) => (
                <div key={element} className="text-center">
                  <div className="aspect-video bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-white/40">{element}</span>
                  </div>
                  <p className="text-white/80">{element}</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 'content':
        return (
          <div className="space-y-8">
            {/* Content Categories */}
            <div className="grid grid-cols-3 gap-6">
              {['Blog Posts', 'Social Media', 'Email Campaigns'].map((category) => (
                <div key={category} className="bg-gray-900 rounded-xl p-6">
                  <h3 className={`text-lg font-medium ${color} mb-4`}>{category}</h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-gray-800 rounded-lg p-3">
                        <div className="h-2 w-3/4 bg-gray-700 rounded mb-2" />
                        <div className="h-2 w-1/2 bg-gray-700 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Analytics */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-medium text-white mb-4">Performance Metrics</h3>
              <div className="grid grid-cols-4 gap-4">
                {['Engagement', 'Reach', 'Conversions', 'ROI'].map((metric) => (
                  <div key={metric} className="text-center">
                    <div className="text-2xl font-medium text-white/80 mb-1">+75%</div>
                    <p className="text-white/60 text-sm">{metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case 'ai':
        return (
          <div className="space-y-8">
            {/* AI Solutions */}
            <div className="grid grid-cols-2 gap-8">
              {['Automation', 'Analytics', 'Personalization', 'Optimization'].map((solution) => (
                <div key={solution} className="bg-gray-900 rounded-xl p-6 group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white/40">{solution} Demo</span>
                  </div>
                  <h3 className={`text-lg font-medium ${color} group-hover:scale-105 transition-transform`}>{solution}</h3>
                  <p className="text-white/60 text-sm mt-2">AI-powered {solution.toLowerCase()} solutions for your business</p>
                </div>
              ))}
            </div>

            {/* Integration Examples */}
            <div className="border-t border-[#008CFF]/30 pt-6">
              <h3 className="text-lg font-medium text-white mb-4">Integration Examples</h3>
              <div className="grid grid-cols-3 gap-4">
                {['CRM Integration', 'Workflow Automation', 'Smart Analytics'].map((example) => (
                  <div key={example} className="bg-gray-900 rounded-lg p-4">
                    <div className="h-2 w-3/4 bg-gray-800 rounded mb-2" />
                    <div className="h-2 w-1/2 bg-gray-800 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="relative bg-gray-950 rounded-2xl w-full max-w-4xl max-h-[80vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className={`p-6 border-b border-[#008CFF]/30 flex items-center justify-between sticky top-0 bg-gray-950 z-10`}>
            <h2 className={`text-2xl font-medium ${color}`}>{title}</h2>
            <button 
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {getDummyContent(id)}
          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-[#008CFF]/30 flex justify-end sticky bottom-0 bg-gray-950">
            <button 
              onClick={onClose}
              className="shiny-cta"
            >
              <span>Close</span>
            </button>
          </div>

          {/* Decorative gradient border */}
          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10 rounded-2xl pointer-events-none`} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeModal, setActiveModal] = useState<string | null>(null)
  
  const mouseRef = useRef({ x: 0, y: 0 })
  const textX = useMotionValue(0)
  const textY = useMotionValue(0)
  const textSpringX = useSpring(textX, {
    stiffness: 100,
    damping: 30,
    mass: 1
  })
  const textSpringY = useSpring(textY, {
    stiffness: 100,
    damping: 30,
    mass: 1
  })

  const bgX = useMotionValue(0)
  const bgY = useMotionValue(0)
  const springX = useSpring(bgX, {
    stiffness: 100,
    damping: 30,
    mass: 1
  })
  const springY = useSpring(bgY, {
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
      
      // Apply smooth spring animation to background position
      bgX.set(x * 30) // Increased movement for more noticeable effect
      bgY.set(y * 30)
      
      // Apply inverse movement to text
      textX.set(x * -10) // Text moves opposite to background
      textY.set(y * -10)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [bgX, bgY, textX, textY])

  return (
    <section id="about" className="relative py-24 border-t border-b border-[#008CFF]/30">
      {/* Parallax Background Container */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-[-10%] bg-black"
          style={{ 
            transform: 'scale(1.1)',
            x: springX,
            y: springY
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      {/* Dark overlay with parallax */}
      <motion.div 
        className="absolute inset-0 bg-black/65"
        style={{ 
          x: useSpring(useTransform(springX, x => x * -0.2)),
          y: useSpring(useTransform(springY, y => y * -0.2))
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
        ref={containerRef}
      >
        <div className="space-y-8 text-3xl font-light text-white/90 max-w-5xl mx-auto text-center">
          <motion.p 
            className="leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let's be real — attention spans are at an all-time low, and making an impact online has never been harder. You don't just need a website. You don't just need content. You need something{' '}
            <span className="text-[#7b2dbd]">impossible to ignore</span>.
          </motion.p>

          <motion.p 
            className="leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            That's where{' '}
            <span className="text-[#008CFF]">Flash Forward</span>{' '}
            comes in.
          </motion.p>

          <motion.p 
            className="leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We specialise in creating custom-tailored digital experiences that don't just grab attention — they{' '}
            <span className="text-yellow-400">hold it hostage</span>. Whether it's web design & development, branding, AI automation, or content creation, we make sure you{' '}
            <span className="text-red-400">stand out</span>{' '}
            in a sea of sameness.
          </motion.p>

          <motion.p 
            className="leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to stand out, capture attention and convert them into customers? Then get in touch with us and let the{' '}
            <span className="text-emerald-400">magic begin</span>.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="mt-32 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <button 
                  onClick={() => setActiveModal(value.id)}
                  className="w-full"
                >
                  <div className="relative bg-gray-950/50 backdrop-blur-sm rounded-2xl p-6 h-full border hover:border-2 transition-all duration-300 group flex flex-col"
                    style={{
                      borderColor: value.id === 'websites' ? 'rgba(0, 140, 255, 0.3)' :
                                 value.id === 'branding' ? 'rgba(250, 204, 21, 0.3)' :
                                 value.id === 'content' ? 'rgba(248, 113, 113, 0.3)' :
                                 value.id === 'ai' ? 'rgba(52, 211, 153, 0.3)' : 'rgba(0, 140, 255, 0.3)'
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                    <h3 className={`text-xl font-medium ${value.color} mb-3 group-hover:scale-105 transition-transform duration-300`}>
                      {value.title}
                    </h3>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300 flex-grow">
                      {value.description}
                    </p>
                    <motion.div 
                      className={`mt-6 group relative inline-flex items-center justify-center px-6 py-2 rounded-full overflow-hidden transition-all duration-300 bg-gradient-to-r ${value.gradient}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative text-white font-medium flex items-center">
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </motion.div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modals */}
      {values.map((value) => (
        <Modal
          key={value.id}
          isOpen={activeModal === value.id}
          onClose={() => setActiveModal(null)}
          title={value.title}
          color={value.color}
          gradient={value.gradient}
          id={value.id}
        />
      ))}

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