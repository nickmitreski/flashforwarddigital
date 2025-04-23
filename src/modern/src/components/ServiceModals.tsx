import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight } from 'lucide-react'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  color: string
  gradient: string
}

export function BrandingModal({ isOpen, onClose, title, color, gradient }: ServiceModalProps) {
  if (!isOpen) return null

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
          {/* Header */}
          <div className="p-6 border-b border-yellow-400/30 flex items-center justify-between sticky top-0 bg-gray-950 z-10">
            <h2 className={`text-2xl font-medium ${color}`}>{title}</h2>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
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

          {/* Footer */}
          <div className="p-6 border-t border-yellow-400/30 flex justify-end sticky bottom-0 bg-gray-950">
            <button onClick={onClose} className="shiny-cta">
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

export function ContentModal({ isOpen, onClose, title, color, gradient }: ServiceModalProps) {
  if (!isOpen) return null

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
          {/* Header */}
          <div className="p-6 border-b border-[#FF1493]/30 flex items-center justify-between sticky top-0 bg-gray-950 z-10">
            <h2 className={`text-2xl font-medium ${color}`}>{title}</h2>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Content Showcase */}
            <div className="grid grid-cols-2 gap-6">
              {['Social Media', 'Blog Posts', 'Email Campaigns', 'Video Content'].map((type) => (
                <div key={type} className="group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden flex items-center justify-center mb-3">
                    <span className="text-white/40">{type}</span>
                  </div>
                  <h3 className={`text-lg font-medium ${color} group-hover:scale-105 transition-transform`}>{type}</h3>
                  <p className="text-white/60 text-sm">Engaging content that converts</p>
                </div>
              ))}
            </div>

            {/* Content Strategy */}
            <div className="border-t border-[#FF1493]/30 pt-6">
              <h3 className="text-lg font-medium text-white mb-4">Content Strategy</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Audience Research',
                  'Content Planning',
                  'Distribution Strategy',
                  'Performance Analytics'
                ].map((strategy) => (
                  <div key={strategy} className="bg-gray-900/50 p-4 rounded-lg">
                    <h4 className="text-white/80 font-medium mb-2">{strategy}</h4>
                    <p className="text-white/60 text-sm">Comprehensive approach to content creation and distribution</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-[#FF1493]/30 flex justify-end sticky bottom-0 bg-gray-950">
            <button onClick={onClose} className="shiny-cta">
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

export function AIModal({ isOpen, onClose, title, color, gradient }: ServiceModalProps) {
  if (!isOpen) return null

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
          className="relative bg-gray-950 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-emerald-400/30 flex items-center justify-between sticky top-0 bg-gray-950 z-10">
            <h2 className={`text-2xl font-medium ${color}`}>{title}</h2>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* AI Tools Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* n8n Automation Demo */}
              <div className="group cursor-pointer bg-gray-900/50 rounded-xl p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all">
                <div className="aspect-video bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-emerald-400 text-4xl mb-2">⚡</div>
                    <span className="text-white/40">n8n Automation</span>
                  </div>
                </div>
                <h3 className={`text-lg font-medium ${color} group-hover:scale-105 transition-transform`}>Workflow Automation</h3>
                <p className="text-white/60 text-sm mt-2">Experience our n8n automation platform</p>
                <button className="mt-4 px-4 py-2 bg-emerald-400/10 text-emerald-400 rounded-lg hover:bg-emerald-400/20 transition-colors">
                  Try Demo
                </button>
              </div>

              {/* AI Image Generation */}
              <div className="group cursor-pointer bg-gray-900/50 rounded-xl p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all">
                <div className="aspect-video bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-emerald-400 text-4xl mb-2">🎨</div>
                    <span className="text-white/40">AI Image Generation</span>
                  </div>
                </div>
                <h3 className={`text-lg font-medium ${color} group-hover:scale-105 transition-transform`}>Image Creation</h3>
                <p className="text-white/60 text-sm mt-2">Generate custom images with AI</p>
                <button className="mt-4 px-4 py-2 bg-emerald-400/10 text-emerald-400 rounded-lg hover:bg-emerald-400/20 transition-colors">
                  Create Image
                </button>
              </div>

              {/* AI Chatbot */}
              <div className="group cursor-pointer bg-gray-900/50 rounded-xl p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all">
                <div className="aspect-video bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-emerald-400 text-4xl mb-2">💬</div>
                    <span className="text-white/40">AI Chatbot</span>
                  </div>
                </div>
                <h3 className={`text-lg font-medium ${color} group-hover:scale-105 transition-transform`}>Smart Assistant</h3>
                <p className="text-white/60 text-sm mt-2">Chat with our AI assistant</p>
                <button className="mt-4 px-4 py-2 bg-emerald-400/10 text-emerald-400 rounded-lg hover:bg-emerald-400/20 transition-colors">
                  Start Chat
                </button>
              </div>

              {/* Web Browser Tool */}
              <div className="group cursor-pointer bg-gray-900/50 rounded-xl p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all">
                <div className="aspect-video bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-emerald-400 text-4xl mb-2">🌐</div>
                    <span className="text-white/40">Web Browser Tool</span>
                  </div>
                </div>
                <h3 className={`text-lg font-medium ${color} group-hover:scale-105 transition-transform`}>Browser Integration</h3>
                <p className="text-white/60 text-sm mt-2">Try our web browser tool</p>
                <button className="mt-4 px-4 py-2 bg-emerald-400/10 text-emerald-400 rounded-lg hover:bg-emerald-400/20 transition-colors">
                  Launch Tool
                </button>
              </div>
            </div>

            {/* Features Section */}
            <div className="border-t border-emerald-400/30 pt-6">
              <h3 className="text-lg font-medium text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  'Custom AI Training',
                  'API Integration',
                  'Real-time Processing',
                  'Scalable Architecture',
                  'Secure Infrastructure',
                  '24/7 Monitoring'
                ].map((feature) => (
                  <div key={feature} className="bg-gray-900/50 p-4 rounded-lg">
                    <h4 className="text-white/80 font-medium mb-2">{feature}</h4>
                    <p className="text-white/60 text-sm">Enterprise-grade AI solutions</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-emerald-400/30 flex justify-end sticky bottom-0 bg-gray-950">
            <button onClick={onClose} className="shiny-cta">
              <span>Close</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 