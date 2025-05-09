import { ChevronRight, X } from 'lucide-react'
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { PortfolioPopup } from './PortfolioPopup'
import { BrandingModal, ContentModal, AIModal } from './ServiceModals'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  color: string
  gradient: string
  id: string
  setActiveTab: (id: string) => void
}

function Modal({ isOpen, onClose, title, color, gradient, id, setActiveTab }: ModalProps) {
  if (!isOpen) return null

  // Dummy content based on modal type
  const getDummyContent = (id: string) => {
    switch (id) {
      case 'web_design':
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
            
            {/* View Work Button */}
            <div className="flex justify-center">
              <button 
                className="shiny-cta"
                onClick={() => {
                  // Set the active tab before closing the modal
                  setActiveTab(id);
                  // Close the modal
                  onClose();
                  // Dispatch the event after a small delay
                  setTimeout(() => {
                    const event = new CustomEvent('openPortfolio');
                    window.dispatchEvent(event);
                  }, 100);
                }}
              >
                <span>View Work</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        )
      case 'branding':
        return (
          <div className="space-y-8">
            {/* Brand Video */}
            <div className="relative rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-gray-900 to-gray-800">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=0&mute=1&controls=1&modestbranding=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

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
              {['Blog Posts', 'Natural Language Processing', 'Email Campaigns'].map((category) => (
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
              {['Automation', 'Workflow Integration', 'Personalization', 'Optimization'].map((solution) => (
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

const services = [
  {
    title: 'Web Design & Development',
    description: 'Custom websites that combine stunning design with powerful functionality.',
    color: 'text-[#008CFF]',
    gradient: 'from-blue-400 via-indigo-500 to-purple-600',
    id: 'web_design',
    features: [
      'Responsive Design',
      'Custom Development',
      'SEO Optimization',
      'Performance Tuning',
    ],
  },
  {
    title: 'Branding That Engages',
    description: 'Create a memorable brand identity that resonates with your audience.',
    color: 'text-yellow-400',
    gradient: 'from-yellow-400 via-amber-500 to-orange-400',
    id: 'branding',
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Visual Identity',
      'Brand Strategy',
    ],
  },
  {
    title: 'Content That Converts',
    description: 'Compelling content strategies that drive engagement and conversions.',
    color: 'text-[#FF1493]',
    gradient: 'from-[#FF1493] via-[#FF1493] to-[#FF1493]',
    id: 'content',
    features: [
      'Content Strategy',
      'Copywriting',
      'Content Marketing',
      'Natural Language Processing',
    ],
  },
  {
    title: 'AI-Powered Automation',
    description: 'Leverage cutting-edge AI to streamline your business operations.',
    color: 'text-emerald-400',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    id: 'ai',
    features: [
      'Process Automation',
      'AI Integration',
      'Smart Analytics',
      'Custom Solutions',
    ],
  },
  {
    title: 'Custom Built AI Agents',
    description: 'Intelligent AI agents tailored to your specific business needs and workflows.',
    color: 'text-[#7b2dbd]',
    gradient: 'from-purple-400 via-violet-500 to-indigo-600',
    id: 'ai_agents',
    features: [
      'Task Automation',
      'Natural Language Processing',
      'Custom AI Training',
      'Workflow Integration',
    ],
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize your digital assets for peak performance and efficiency.',
    color: 'text-red-400',
    gradient: 'from-red-400 via-red-500 to-red-600',
    id: 'performance',
    features: [
      'Speed Optimization',
      'Code Optimization',
      'UX Enhancement',
      'Conversion Rate',
    ],
  },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  const [activeTab, setActiveTab] = useState('web_design')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  
  // Add event listener for opening portfolio
  useEffect(() => {
    const handleOpenPortfolio = () => {
      setIsPortfolioOpen(true);
    };
    
    window.addEventListener('openPortfolio', handleOpenPortfolio);
    
    return () => {
      window.removeEventListener('openPortfolio', handleOpenPortfolio);
    };
  }, []);

  const handleServiceClick = (service: string) => {
    setSelectedService(service)
  }

  const handleCloseModal = () => {
    setSelectedService(null)
  }

  return (
    <section ref={containerRef} id="services" className="relative min-h-screen py-32 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ 
          backgroundImage: `url(/backgrounds/services-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          y,
          opacity
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-3xl font-light text-white/90 max-w-5xl mx-auto text-center">
          <motion.p 
            className="leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            We create{' '}
            <span className="text-[#008CFF]">digital solutions</span>{' '}
            that drive growth.
          </motion.p>

          <motion.p 
            className="leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            From{' '}
            <span className="text-yellow-400">web development</span>{' '}
            to{' '}
            <span className="text-red-400">AI automation</span>,
          </motion.p>

          <motion.p 
            className="leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            we transform your vision into{' '}
            <span className="text-[#7b2dbd]">digital reality</span>.
          </motion.p>
        </div>
        
        <div className="mt-32 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <div className="w-full text-left">
                  <div 
                    className="relative bg-gray-950/50 backdrop-blur-sm rounded-2xl p-8 h-full border hover:border-2 transition-all duration-300 group cursor-pointer"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                    
                    <h3 className={`text-xl font-medium ${service.color} mb-4`}>
                      {service.title}
                    </h3>
                    <p className="text-white/60 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <motion.li 
                          key={feature} 
                          className="flex items-center text-white/80"
                          whileHover={{ x: 5 }}
                        >
                          <ChevronRight className={`w-4 h-4 ${service.color} mr-2`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
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

      {/* Portfolio Popup */}
      <PortfolioPopup
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
      />

      <BrandingModal
        isOpen={selectedService === 'branding'}
        onClose={handleCloseModal}
        title="Strategic Branding"
        color="text-yellow-400"
        gradient="from-yellow-400 via-amber-500 to-orange-400"
      />

      <ContentModal
        isOpen={selectedService === 'content'}
        onClose={handleCloseModal}
        title="Content That Engages"
        color="text-[#FF1493]"
        gradient="from-pink-500 via-rose-500 to-red-500"
      />

      <AIModal
        isOpen={selectedService === 'ai'}
        onClose={handleCloseModal}
        title="AI-Powered Growth"
        color="text-emerald-400"
        gradient="from-emerald-400 via-teal-500 to-cyan-400"
      />
    </section>
  )
} 