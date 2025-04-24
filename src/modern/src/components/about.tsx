import { useRef, useState, useEffect } from 'react'
import { ChevronRight, Award, Users, Target, Zap, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrandingPopup, ContentPopup, AIPopup } from './ServicePopups'

const values = [
  {
    title: 'Websites That Convert',
    description: 'Custom-crafted websites that combine stunning design with powerful functionality to drive real business results.',
    icon: Award,
    color: 'text-[#008CFF]',
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
    id: 'websites',
    features: [
      'Responsive Design',
      'Custom Development',
      'SEO Optimization',
      'Performance Tuning'
    ]
  },
  {
    title: 'Strategic Branding',
    description: 'Create a memorable brand identity that captures attention and builds lasting connections with your audience.',
    icon: Users,
    color: 'text-yellow-400',
    gradient: 'from-yellow-400 via-amber-500 to-orange-400',
    id: 'branding',
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Visual Identity',
      'Brand Strategy'
    ]
  },
  {
    title: 'Content That Engages',
    description: 'Compelling content strategies that tell your story and drive meaningful engagement with your target market.',
    icon: Target,
    color: 'text-[#FF1493]',
    gradient: 'from-[#FF1493] via-[#FF1493] to-[#FF1493]',
    id: 'content',
    features: [
      'Content Strategy',
      'Copywriting',
      'Content Marketing',
      'Social Media'
    ]
  },
  {
    title: 'Custom AI Solutions',
    description: 'Harness the power of artificial intelligence with custom-built solutions tailored to your unique business needs and goals.',
    icon: Zap,
    color: 'text-emerald-400',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    id: 'ai',
    features: [
      'Process Automation',
      'AI Integration',
      'Smart Analytics',
      'Custom Solutions'
    ]
  },
]

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activePopup, setActivePopup] = useState<string | null>(null)

  const handlePopupOpen = (id: string) => {
    setActivePopup(id)
  }

  const handlePopupClose = () => {
    setActivePopup(null)
  }

  return (
    <section id="about" className="relative py-24 border-t border-b border-[#008CFF]/30 bg-black">
      {/* Parallax Background Container - REMOVED */}
      
      {/* Dark overlay with parallax - REMOVED */}
      
      {/* Gradient Background with Parallax - REMOVED */}

      <div className="relative z-[5] w-full">
        <div className="space-y-8 text-3xl font-light text-white max-w-5xl mx-auto text-center">
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
            <span className="text-[#FF1493]">stand out</span>{' '}
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

        {/* Restore original card layout */}
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
                <div className="w-full">
                  <div className="relative bg-gray-950/50 backdrop-blur-sm rounded-2xl p-6 h-full border transition-all duration-300 group flex flex-col"
                    style={{
                      borderColor: value.id === 'websites' ? 'rgba(0, 140, 255, 0.3)' :
                                 value.id === 'branding' ? 'rgba(250, 204, 21, 0.3)' :
                                 value.id === 'content' ? 'rgba(248, 113, 113, 0.3)' :
                                 value.id === 'ai' ? 'rgba(52, 211, 153, 0.3)' : 'rgba(0, 140, 255, 0.3)'
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-5 rounded-2xl pointer-events-none`} />
                    <h3 className={`text-xl font-medium ${value.color} mb-3`}>
                      {value.title}
                    </h3>
                    <p className="text-white/80 flex-grow">
                      {value.description}
                    </p>
                    <div 
                      className={`mt-6 relative inline-flex items-center justify-center px-6 py-2 rounded-full overflow-hidden bg-gradient-to-r ${value.gradient} cursor-pointer`}
                      onClick={() => {
                        if (value.id === 'websites') {
                          window.dispatchEvent(new CustomEvent('openPortfolio'));
                        } else {
                          handlePopupOpen(value.id);
                        }
                      }}
                    >
                      <div className="absolute inset-0 bg-black/20" />
                      <span className="relative text-white font-medium flex items-center">
                        {value.id === 'websites' ? 'View Work' :
                         value.id === 'branding' ? 'Take A Look' :
                         value.id === 'content' ? 'Show More' :
                         value.id === 'ai' ? 'Explore' : 'Learn More'}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activePopup === 'branding' && (
          <BrandingPopup 
            isOpen={true} 
            onClose={handlePopupClose} 
            title="Strategic Branding" 
          />
        )}
        {activePopup === 'content' && (
          <ContentPopup 
            isOpen={true} 
            onClose={handlePopupClose} 
            title="Content That Engages" 
          />
        )}
        {activePopup === 'ai' && (
          <AIPopup 
            isOpen={true} 
            onClose={handlePopupClose} 
            title="Custom AI Solutions" 
          />
        )}
      </AnimatePresence>
    </section>
  )
} 