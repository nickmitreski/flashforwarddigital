'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { ChevronRight, Monitor, Palette, Zap, MessageSquare, BarChart, Bot } from 'lucide-react'

export default function Home() {
  const [visitStartTime] = useState<Date>(new Date())
  const [visitDuration, setVisitDuration] = useState<string>("0:00")

  useEffect(() => {
    const updateDuration = () => {
      const now = new Date()
      const diff = now.getTime() - visitStartTime.getTime()
      const minutes = Math.floor(diff / 60000)
      const seconds = Math.floor((diff % 60000) / 1000)
      setVisitDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`)
    }

    const timer = setInterval(updateDuration, 1000)
    return () => clearInterval(timer)
  }, [visitStartTime])

  useEffect(() => {
    const canvas = document.getElementById('heroCanvas') as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; radius: number; vx: number; vy: number }[] = []
    const particleCount = 100

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(147, 51, 234, 0.1)'
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <canvas
          id="heroCanvas"
          className="absolute inset-0 z-0 opacity-40"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute -bottom-[1px] left-1/2 right-1/2 -mx-[50vw] w-screen border-b border-gray-800" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <span className="inline-flex items-center px-6 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-sm text-purple-300">
              Digital Agency for the Modern Era
              <ChevronRight className="ml-2 h-4 w-4" />
            </span>
            
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight md:leading-tight">
              <div className="overflow-hidden">
                <div className="animate-fade-in-up [animation-delay:0ms]">
                  Websites that drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">leads</span>.
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="animate-fade-in-up [animation-delay:200ms]">
                  Branding that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] via-[#FF1493] to-[#FF1493]">engages</span>.
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="animate-fade-in-up [animation-delay:400ms]">
                  Content that <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">converts</span>.
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="animate-fade-in-up [animation-delay:600ms]">
                  AI that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] via-[#FF1493] to-[#FF1493]">automates growth</span>.
                </div>
              </div>
            </h1>
            
            <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up [animation-delay:800ms]">
              We create digital experiences that capture attention, drive engagement, and deliver results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up [animation-delay:1000ms]">
              <button className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-pink-600 to-purple-600" />
                <span className="relative">Book a Consultation</span>
                <ChevronRight className="relative ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="inline-flex items-center px-8 py-3 rounded-full border border-gray-700 hover:border-purple-500/50 bg-gray-900/50 text-gray-300 hover:text-white transition-all duration-300">
                View Our Work
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-[#FF1493]/10 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        
        {/* Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Web Design Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-[#FF1493]/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative h-full bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/10 transition-all duration-300 group-hover:border-purple-500/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <Monitor className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#FF1493]">Web Design</h3>
                </div>
                <p className="text-gray-400 mb-8">
                  High-performance websites that convert visitors into customers. We combine stunning design with strategic UX to create digital experiences that drive results.
                </p>
                <ul className="space-y-4">
                  {[
                    'Custom Website Design',
                    'Responsive Development',
                    'UX/UI Optimization',
                    'Performance Tuning',
                    'SEO Integration',
                    'Analytics Setup'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300 group/item">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500/50 group-hover/item:bg-purple-400 transition-colors" />
                      <span className="group-hover/item:text-purple-400 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-purple-500/10">
                  <button className="group/btn w-full py-4 rounded-xl bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-all duration-300">
                    Learn More
                    <ChevronRight className="inline-block ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Branding Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF1493]/10 to-orange-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative h-full bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-[#FF1493]/10 transition-all duration-300 group-hover:border-[#FF1493]/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#FF1493]/10 rounded-xl">
                    <svg className="h-8 w-8 text-[#FF1493]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1493] to-orange-400">Branding</h3>
                </div>
                <p className="text-gray-400 mb-8">
                  Build a brand that resonates with your audience and stands out in your industry. We create comprehensive brand identities that tell your story.
                </p>
                <ul className="space-y-4">
                  {[
                    'Logo Design',
                    'Brand Guidelines',
                    'Visual Identity',
                    'Brand Strategy',
                    'Marketing Collateral',
                    'Brand Voice & Messaging'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300 group/item">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#FF1493]/50 group-hover/item:bg-[#FF1493] transition-colors" />
                      <span className="group-hover/item:text-[#FF1493] transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-[#FF1493]/10">
                  <button className="group/btn w-full py-4 rounded-xl bg-[#FF1493]/10 text-[#FF1493] hover:bg-[#FF1493]/20 transition-all duration-300">
                    Learn More
                    <ChevronRight className="inline-block ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* AI & Automation Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative h-full bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-orange-500/10 transition-all duration-300 group-hover:border-orange-500/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-500/10 rounded-xl">
                    <svg className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">AI & Automation</h3>
                </div>
                <p className="text-gray-400 mb-8">
                  Leverage cutting-edge AI technology to automate processes, enhance customer experience, and drive business growth.
                </p>
                <ul className="space-y-4">
                  {[
                    'AI Chatbots',
                    'Process Automation',
                    'Data Analytics',
                    'Machine Learning',
                    'Custom AI Solutions',
                    'Integration Services'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300 group/item">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500/50 group-hover/item:bg-orange-400 transition-colors" />
                      <span className="group-hover/item:text-orange-400 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-orange-500/10">
                  <button className="group/btn w-full py-4 rounded-xl bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 transition-all duration-300">
                    Learn More
                    <ChevronRight className="inline-block ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-[#FF1493]">
              {visitDuration}
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Time you've spent exploring our experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              value="8.3s"
              description="Average time spent on most websites before users leave"
            />
            <StatCard
              value="2-3min"
              description="Optimal engagement time for highest conversion rates"
            />
            <StatCard
              value="+127%"
              description="Increase in conversions when users spend &gt; 2 minutes on site"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950 via-purple-950/5 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-[#FF1493]/10 blur-3xl -z-10" />
            <div className="space-y-16">
              <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-[#FF1493]">
                The Digital Era Is Loud.<br />We Make You Unforgettable.
              </h2>
              <div className="prose prose-lg prose-invert mx-auto">
                <p className="text-2xl leading-relaxed text-gray-300">
                  Let's be real — attention spans are at an all-time low, and making an impact online has never been harder. You don't just need a website. You don't just need content. You need something <span className="text-white font-bold">bold</span>, <span className="text-white font-bold">different</span>, and <span className="text-white font-bold">impossible to ignore</span>.
                </p>
                <div className="my-16 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-[#FF1493]/20 rounded-2xl blur-lg" />
                  <p className="relative text-4xl font-bold text-center text-white py-12">
                    That's where Flash Forward comes in.
                  </p>
                </div>
                <p className="text-2xl leading-relaxed text-gray-300">
                  We specialise in creating custom-tailored digital experiences that don't just grab attention — they <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#FF1493] font-bold">hold it hostage</span>. Whether it's web design & development, branding, AI automation, or content creation, we make sure you <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-[#FF1493] font-bold">stand out in a sea of sameness</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Web Design Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-[#FF1493]/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <Monitor className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Web Design & Development</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Your website isn't just a digital business card—it's your 24/7 conversion machine. We create high-performance websites that not only look stunning but also engage visitors, generate leads, and drive sales.
                </p>
                <ul className="space-y-3">
                  {[
                    'Custom Website Design & Development',
                    'Optimised User Experience (UX) & Navigation',
                    'SEO-Optimised Pages for Maximum Visibility',
                    'AI Chatbot & Smart Integrations',
                    'Conversion-Optimised Web Pages',
                    'Website Speed & Performance Optimisation',
                    'Website Migrations & Revamps'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Branding That Engages */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF1493]/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#FF1493]/10 rounded-xl">
                    <Palette className="h-8 w-8 text-[#FF1493]" />
                  </div>
                  <h3 className="text-2xl font-bold">Branding That Engages</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Your brand is more than just a logo—it's your identity, voice, and first impression. We build cohesive, standout branding that ensures you're recognized, remembered, and respected.
                </p>
                <ul className="space-y-3">
                  {[
                    'Logo Design & Brand Identity',
                    'Full Brand Kit (Typography, Colour Palettes, Guidelines)',
                    'Brand Strategy & Positioning',
                    'Custom Visual Assets & Graphics'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#FF1493]" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content That Converts */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-[#FF1493]/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <MessageSquare className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Content That Converts</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  We don't create content just to fill up space. We create impact-driven content designed to engage, inform, and persuade.
                </p>
                <ul className="space-y-3">
                  {[
                    'Social Media Content (Posts, Reels, Stories)',
                    'Promo & Marketing Videos',
                    'Flyers, Digital Ads & Artwork',
                    'Website Lander Videos & Explainer Content',
                    'AI-Generated & Custom Content'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI-Powered Automation & Growth */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF1493]/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#FF1493]/10 rounded-xl">
                    <Bot className="h-8 w-8 text-[#FF1493]" />
                  </div>
                  <h3 className="text-2xl font-bold">AI-Powered Automation & Growth</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Why do things manually when AI can do it better, faster, and smarter? We integrate cutting-edge AI solutions to automate your growth, streamline workflows, and maximise efficiency.
                </p>
                <ul className="space-y-3">
                  {[
                    'AI Chatbots for Websites & Customer Support',
                    'Automated Booking Agents',
                    'AI-Powered Social Media Growth Strategies',
                    'Custom Workflow Automations',
                    'AI-Personalised Assistants with RAG Integration',
                    'Web Traffic Optimisation & Automated SEO Strategies'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#FF1493]" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-black" />
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-[#FF1493] dark:from-purple-400 dark:to-[#FF1493]">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features with different levels of support and customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential Plan */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-[#FF1493]/5 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative h-full bg-white/50 dark:bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/10 transition-all duration-300 group-hover:scale-[1.02]">
                <div className="absolute -top-4 left-4">
                  <div className="bg-white dark:bg-black rounded-lg p-2 shadow-md border border-purple-500/10">
                    <div className="w-8 h-8 rounded-full border-2 border-purple-500 group-hover:rotate-90 transition-all duration-300" />
                  </div>
                </div>
                
                <div className="mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Essential</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Perfect for startups and small businesses</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">$999</span>
                    <span className="text-gray-600 dark:text-gray-400">/project</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Custom Website Design',
                    'Mobile Responsive',
                    'Basic SEO Setup',
                    '3 Page Templates',
                    'Contact Form Integration',
                    '2 Rounds of Revisions'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-purple-600 dark:hover:bg-purple-400 transition-all duration-300 group-hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>

            {/* Growth Plan - Featured */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-[#FF1493]/20 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative h-full bg-gray-900 dark:bg-white p-8 rounded-2xl border border-purple-500/20 transition-all duration-300 group-hover:scale-[1.02] transform translate-y-[-1rem]">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-[#FF1493] text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
                
                <div className="mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-white dark:text-gray-900">Growth</h3>
                  <p className="mt-2 text-gray-400 dark:text-gray-600">For businesses ready to scale</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-white dark:text-gray-900">$2,499</span>
                    <span className="text-gray-400 dark:text-gray-600">/project</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Everything in Essential, plus:',
                    'Custom Branding Package',
                    'Advanced SEO Optimization',
                    '8 Page Templates',
                    'E-commerce Integration',
                    'Social Media Integration',
                    'Premium Support',
                    '4 Rounds of Revisions'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300 dark:text-gray-600">
                      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-medium hover:bg-purple-400 dark:hover:bg-purple-600 transition-all duration-300 group-hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF1493]/5 to-orange-500/5 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <div className="relative h-full bg-white/50 dark:bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-[#FF1493]/10 transition-all duration-300 group-hover:scale-[1.02]">
                <div className="absolute -top-4 left-4">
                  <div className="bg-white dark:bg-black rounded-lg p-2 shadow-md border border-[#FF1493]/10">
                    <div className="w-8 h-8">
                      <div className="w-full h-full border-2 border-[#FF1493]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                    </div>
                  </div>
                </div>
                
                <div className="mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">For large organizations</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">Custom</span>
                    <span className="text-gray-600 dark:text-gray-400">/project</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Everything in Growth, plus:',
                    'Custom AI Integration',
                    'Advanced Analytics',
                    'Unlimited Pages',
                    'Priority Support',
                    'Custom Features',
                    'Dedicated Account Manager',
                    'Unlimited Revisions'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-[#FF1493]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-[#FF1493] dark:hover:bg-[#FF1493] transition-all duration-300 group-hover:scale-105">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Add-Ons Section */}
          <div className="mt-20">
            <div className="text-center relative">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Add-Ons & Custom Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">Need something more specific? Enhance your package with these add-ons:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Social Media Management',
                  'Content Creation',
                  'Custom AI Chatbot',
                  'Advanced Analytics',
                  'Email Marketing',
                  'Video Production'
                ].map((addon) => (
                  <div key={addon} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-[#FF1493]/5 rounded-full blur transition-all duration-300 group-hover:blur-xl" />
                    <button className="relative px-6 py-2 rounded-full bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-purple-500/10 text-gray-600 dark:text-gray-300 hover:border-purple-500/30 transition-all duration-300">
                      {addon}
                      <span className="block h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-[#FF1493] transition-all duration-300" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-[#FF1493]/5 rounded-2xl blur-xl" />
              <div className="relative bg-white/5 dark:bg-black/5 backdrop-blur-xl p-12 rounded-2xl border border-purple-500/10 text-center">
                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-[#FF1493] dark:from-purple-400 dark:to-[#FF1493]">
                  Ready to Transform Your Digital Presence?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's create something extraordinary together. Our team is ready to help you achieve your digital goals.
                </p>
                <button className="inline-flex items-center px-8 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-purple-600 dark:hover:bg-purple-400 transition-all duration-300 hover:scale-105">
                  Schedule a Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timer */}
      <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-xl p-4 rounded-xl shadow-lg border border-gray-200/20">
        <p className="text-sm text-gray-400">
          Time spent on site: {visitDuration}
        </p>
      </div>
    </main>
  )
}

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-gray-200/20 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
)

const StatCard = ({ value, description }: { value: string; description: string }) => (
  <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800">
    <div className="text-3xl font-bold text-purple-400">
      {value}
    </div>
    <p className="mt-2 text-sm text-gray-400">
      {description}
    </p>
  </div>
) 