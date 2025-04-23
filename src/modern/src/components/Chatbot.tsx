import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Send, X, Loader2, Image as ImageIcon, Link as LinkIcon } from 'lucide-react'
import { Message } from '../types/chatbot'
import { PORTFOLIO_ITEMS } from '../constants/portfolio'

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Welcome to Flash Forward! 👋 I\'m your AI assistant, ready to showcase our digital solutions and help bring your vision to life. Would you like to:\n\n1. See our portfolio\n2. Learn about our services\n3. Get a custom quote\n4. Discuss your project\n\nJust let me know what interests you!',
      media: [
        {
          type: 'image',
          url: '/welcome-banner.jpg',
          title: 'Flash Forward Portfolio Showcase'
        }
      ]
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const API_KEY = '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'

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user' as const, content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'mixtral-8x7b-32768',
          messages: [
            {
              role: 'system',
              content: 'You are Flash Forward\'s AI assistant. You help showcase our portfolio, explain services, and guide potential clients. You can share images and links from our portfolio. Be engaging, professional, and proactive in showing relevant examples.'
            },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            userMessage
          ],
          temperature: 0.7,
          max_tokens: 2048
        })
      })

      const data = await response.json()
      let mediaContent: Message['media'] = undefined

      // Add relevant portfolio items based on message content
      if (data.choices[0].message.content.toLowerCase().includes('portfolio') ||
          data.choices[0].message.content.toLowerCase().includes('example')) {
        mediaContent = PORTFOLIO_ITEMS.webDesign
      }

      const assistantMessage = {
        role: 'assistant' as const,
        content: data.choices[0].message.content,
        media: mediaContent
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }])
    }

    setIsLoading(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating Button - bottom right position */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-[60]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
      </motion.button>

      {/* Traditional Chat Interface - bottom right corner */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-black rounded-lg shadow-xl overflow-hidden border border-[#008CFF]/30 backdrop-blur-sm z-[999]"
          >
            {/* Header */}
            <div className="h-12 bg-gray-950/95 backdrop-blur-sm border-b border-[#008CFF]/30 flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-sm font-light text-[#008CFF]">Flash Forward AI</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={chatContainerRef}
              className="h-[calc(100%-96px)] overflow-y-auto p-4 bg-gray-950/80"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block max-w-[85%] rounded-lg px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white'
                        : 'bg-gray-900 border border-[#008CFF]/20 text-white/80'
                    }`}
                  >
                    <div className="text-sm font-light whitespace-pre-wrap">{message.content}</div>
                  </div>
                  
                  {/* Media Content */}
                  {message.media && (
                    <div className="grid grid-cols-1 gap-2 mt-2 text-left">
                      {message.media.map((item, i) => (
                        <div key={i} className="relative">
                          {item.type === 'image' && (
                            <div className="relative bg-gray-900 rounded overflow-hidden border border-[#008CFF]/20 hover:border-[#008CFF]/40 transition-colors">
                              <div className="flex items-center p-2">
                                <ImageIcon className="w-4 h-4 text-[#008CFF] mr-2" />
                                <span className="text-xs text-white/70">{item.title}</span>
                              </div>
                            </div>
                          )}
                          {item.type === 'link' && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-2 bg-gray-900 rounded border border-[#008CFF]/20 hover:border-[#008CFF]/40 transition-colors"
                            >
                              <div className="flex items-center text-[#008CFF] text-xs">
                                <LinkIcon className="w-3 h-3 mr-1" />
                                <span>{item.title}</span>
                              </div>
                              {item.preview && (
                                <p className="text-xs text-white/60 mt-1">{item.preview}</p>
                              )}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-gray-900 border border-[#008CFF]/20 rounded-lg px-4 py-2">
                    <Loader2 className="w-4 h-4 animate-spin text-[#008CFF]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="h-[60px] border-t border-[#008CFF]/30 p-2 bg-gray-950/95 backdrop-blur-sm">
              <div className="relative h-full flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our services..."
                  className="w-full h-full pl-3 pr-10 py-2 bg-gray-900 rounded-full text-sm text-white/80 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-[#008CFF]/50 border border-[#008CFF]/20 focus:border-[#008CFF]/40"
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 