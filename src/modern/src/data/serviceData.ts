// serviceData.ts
//
// Centralized data for all branding, content, and AI services displayed in the UI.
//
// Usage:
//   Import the relevant array (brandingServices, contentServices, aiServices) where needed.
//   Each service object should follow the Service interface for consistency and type safety.
//
// To add a new service:
//   - Add a new object to the appropriate array, following the Service interface.
//   - Use an icon from ServiceIcons or add a new one if needed.

import { ServiceIcons } from '../components/shared/ServiceIcons';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

export const brandingServices: Service[] = [
  {
    title: 'Logo Design',
    description: 'Professional logo design including primary & secondary variations, responsive designs, and comprehensive usage guidelines.',
    icon: ServiceIcons.LogoDesign,
    gradientFrom: 'yellow-500',
    gradientTo: 'amber-400'
  },
  {
    title: 'Print Materials',
    description: 'Professional brochures, catalogs, packaging design, and trade show materials creation.',
    icon: ServiceIcons.PrintMaterials,
    gradientFrom: 'red-500',
    gradientTo: 'orange-400'
  },
  {
    title: 'Brand Photography',
    description: 'Custom photography direction, lifestyle shoots, product photography, and visual storytelling that captures your brand\'s unique essence.',
    icon: ServiceIcons.BrandPhotography,
    gradientFrom: 'fuchsia-500',
    gradientTo: 'violet-400'
  },
  {
    title: 'Digital Assets',
    description: 'Social media graphics, banner ads, email templates, and custom landing page designs.',
    icon: ServiceIcons.DigitalAssets,
    gradientFrom: 'indigo-500',
    gradientTo: 'blue-400'
  },
  {
    title: 'Brand Style Guide',
    description: 'Comprehensive style guides including color palettes, typography, design elements, and visual hierarchy guidelines.',
    icon: ServiceIcons.BrandStyleGuide,
    gradientFrom: 'purple-500',
    gradientTo: 'violet-400'
  },
  {
    title: 'Visual Assets',
    description: 'Business cards, stationery, social media templates, email signatures, and presentation materials design.',
    icon: ServiceIcons.VisualAssets,
    gradientFrom: 'pink-500',
    gradientTo: 'rose-400'
  },
  {
    title: 'Brand Experience',
    description: 'Customer journey mapping, touchpoint optimization, and comprehensive brand interaction guidelines.',
    icon: ServiceIcons.BrandExperience,
    gradientFrom: 'blue-500',
    gradientTo: 'cyan-400'
  },
  {
    title: 'Motion Design',
    description: 'Animated logos, brand motion graphics, video templates, and engaging social media animations.',
    icon: ServiceIcons.MotionDesign,
    gradientFrom: 'green-500',
    gradientTo: 'emerald-400'
  },
  {
    title: 'Event Branding',
    description: 'Event identity design, promotional materials, environmental graphics, and merchandise design.',
    icon: ServiceIcons.EventBranding,
    gradientFrom: 'violet-500',
    gradientTo: 'purple-400'
  },
  {
    title: 'Product Branding',
    description: 'Product naming, packaging design, product identity development, and line extension branding.',
    icon: ServiceIcons.ProductBranding,
    gradientFrom: 'amber-500',
    gradientTo: 'yellow-400'
  },
  {
    title: 'Corporate Identity',
    description: 'Office environment design, vehicle wraps, uniform design, and comprehensive signage systems.',
    icon: ServiceIcons.CorporateIdentity,
    gradientFrom: 'teal-500',
    gradientTo: 'cyan-400'
  }
];

export const contentServices: Service[] = [
  {
    title: 'Content Strategy',
    description: 'Strategic content planning, audience research, and content calendar development to drive engagement and growth.',
    icon: ServiceIcons.ContentStrategy,
    gradientFrom: 'blue-500',
    gradientTo: 'cyan-400'
  },
  {
    title: 'Social Media Management',
    description: 'Comprehensive social media strategy, content creation, and community management across all platforms.',
    icon: ServiceIcons.SocialMedia,
    gradientFrom: 'pink-500',
    gradientTo: 'purple-400'
  },
  {
    title: 'Blog & Article Writing',
    description: 'Engaging blog posts, articles, and long-form content that establishes thought leadership and drives SEO.',
    icon: ServiceIcons.BlogWriting,
    gradientFrom: 'orange-500',
    gradientTo: 'amber-400'
  },
  {
    title: 'Video Production',
    description: 'Professional video content creation including product demos, tutorials, and brand storytelling.',
    icon: ServiceIcons.VideoProduction,
    gradientFrom: 'green-500',
    gradientTo: 'emerald-400'
  },
  {
    title: 'Email Marketing',
    description: 'Strategic email campaigns, newsletters, and automated sequences to nurture leads and drive conversions.',
    icon: ServiceIcons.EmailMarketing,
    gradientFrom: 'indigo-500',
    gradientTo: 'blue-400'
  },
  {
    title: 'SEO Content',
    description: 'Search-optimized content that ranks well and drives organic traffic to your website.',
    icon: ServiceIcons.SEOContent,
    gradientFrom: 'yellow-500',
    gradientTo: 'orange-400'
  }
];

export const aiServices: Service[] = [
  {
    title: 'Business Process Automation',
    description: 'Custom workflow automations to streamline your business processes and integrate various services seamlessly for maximum efficiency.',
    icon: ServiceIcons.BusinessAutomation,
    gradientFrom: 'blue-500',
    gradientTo: 'cyan-400'
  },
  {
    title: 'Social Media Growth',
    description: 'Strategic AI-powered growth solutions in partnership with Follow Fuse, delivering exceptional social media presence, engagement optimization, and targeted audience building.',
    icon: ServiceIcons.SocialMediaGrowth,
    gradientFrom: 'pink-500',
    gradientTo: 'purple-400'
  },
  {
    title: 'SEO Optimization',
    description: 'Comprehensive SEO solutions powered by Impressive Digital, combining AI-driven insights with expert strategies to boost your search rankings and online visibility.',
    icon: ServiceIcons.SEOOptimization,
    gradientFrom: 'orange-500',
    gradientTo: 'amber-400'
  },
  {
    title: 'AI Market Analyzer',
    description: 'Real-time market analysis, competitor monitoring, and industry insights powered by advanced AI algorithms.',
    icon: ServiceIcons.MarketAnalyzer,
    gradientFrom: 'green-500',
    gradientTo: 'emerald-400'
  },
  {
    title: 'Predictive Analytics',
    description: 'Advanced forecasting for revenue, customer behavior, and business metrics with interactive dashboards.',
    icon: ServiceIcons.PredictiveAnalytics,
    gradientFrom: 'indigo-500',
    gradientTo: 'blue-400'
  },
  {
    title: 'AI Content Generator',
    description: 'Create engaging blog posts, social media content, and marketing copy with AI-powered writing assistance.',
    icon: ServiceIcons.ContentGenerator,
    gradientFrom: 'yellow-500',
    gradientTo: 'orange-400'
  },
  {
    title: 'Multilingual AI Translator',
    description: 'Real-time content translation with cultural context adaptation and SEO optimization for global reach.',
    icon: ServiceIcons.Translator,
    gradientFrom: 'purple-500',
    gradientTo: 'violet-400'
  },
  {
    title: 'AI Ad Campaign Manager',
    description: 'Automated A/B testing, budget optimization, and performance prediction for your advertising campaigns.',
    icon: ServiceIcons.AdCampaign,
    gradientFrom: 'red-500',
    gradientTo: 'rose-400'
  },
  {
    title: 'Social Media AI Assistant',
    description: 'Smart content scheduling, engagement optimization, and trend analysis for social media success.',
    icon: ServiceIcons.SocialMediaAI,
    gradientFrom: 'cyan-500',
    gradientTo: 'teal-400'
  },
  {
    title: 'Dynamic Pricing Engine',
    description: 'Real-time price optimization and competitor monitoring to maximize your profit margins.',
    icon: ServiceIcons.PricingEngine,
    gradientFrom: 'emerald-500',
    gradientTo: 'green-400'
  },
  {
    title: 'AI Security Guardian',
    description: 'Advanced fraud detection, threat prevention, and data protection powered by AI.',
    icon: ServiceIcons.SecurityGuardian,
    gradientFrom: 'blue-500',
    gradientTo: 'indigo-400'
  },
  {
    title: 'Smart Document Processor',
    description: 'Automated data extraction, document classification, and intelligent form processing.',
    icon: ServiceIcons.DocumentProcessor,
    gradientFrom: 'violet-500',
    gradientTo: 'purple-400'
  },
  {
    title: 'AI Research Assistant',
    description: 'Automated market research, data analysis, and trend identification with comprehensive reporting.',
    icon: ServiceIcons.ResearchAssistant,
    gradientFrom: 'amber-500',
    gradientTo: 'yellow-400'
  },
  {
    title: 'Support Quality Analyzer',
    description: 'AI-powered analysis of support quality, response times, and customer satisfaction metrics.',
    icon: ServiceIcons.SupportAnalyzer,
    gradientFrom: 'pink-500',
    gradientTo: 'rose-400'
  },
  {
    title: 'Smart Data Cleansing',
    description: 'Automated data cleaning, duplicate detection, and standardization for improved data quality.',
    icon: ServiceIcons.DataCleansing,
    gradientFrom: 'teal-500',
    gradientTo: 'cyan-400'
  }
]; 