export interface Message {
  role: 'user' | 'assistant'
  content: string
  media?: Media[]
}

export interface Media {
  type: 'image' | 'link'
  url: string
  title?: string
  preview?: string
}

export interface PortfolioItem {
  type: 'image' | 'link'
  url: string
  title: string
  preview?: string
}

export interface PortfolioItems {
  [category: string]: PortfolioItem[]
} 