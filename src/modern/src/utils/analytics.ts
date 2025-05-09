import { createClient } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

// Debug: Log all environment variables
console.log('Environment variables:', {
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
});

const SUPABASE_URL = 'https://rrknsktciaywgqtkrzme.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJya25za3RjaWF5d2dxdGtyem1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NzgyODEsImV4cCI6MjA2MTE1NDI4MX0.RT3OqeXZcxG8ArVc-CR7VSn3Jhu0C-Enk1Hlmq0EpDQ';

// Initialize Supabase client
export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Get device type
const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

// Track scroll depth
const getScrollDepth = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return Math.round((scrollTop + windowHeight) / documentHeight * 100);
};

// Generate a unique visitor ID if one doesn't exist
const getVisitorId = () => {
  let visitorId = localStorage.getItem('visitor_id');
  if (!visitorId) {
    visitorId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem('visitor_id', visitorId);
  }
  return visitorId;
};

// Get UTM parameters
const getUtmParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source') || 'direct',
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign')
  };
};

// Track page views
export const trackPageView = async (path: string) => {
  const visitorId = getVisitorId();
  const startTime = Date.now();
  const { utm_source, utm_medium, utm_campaign } = getUtmParams();

  // Store the start time for duration calculation
  localStorage.setItem('page_start_time', startTime.toString());
  localStorage.setItem('first_interaction', 'false');
  localStorage.setItem('total_interactions', '0');

  // Initialize scroll tracking
  let maxScrollDepth = 0;
  const trackScroll = () => {
    const currentDepth = getScrollDepth();
    maxScrollDepth = Math.max(maxScrollDepth, currentDepth);
  };
  window.addEventListener('scroll', trackScroll);

  return { 
    visitorId, 
    startTime,
    cleanup: () => window.removeEventListener('scroll', trackScroll)
  };
};

// Track user interaction
export const trackInteraction = () => {
  const totalInteractions = parseInt(localStorage.getItem('total_interactions') || '0');
  localStorage.setItem('total_interactions', (totalInteractions + 1).toString());
  
  if (localStorage.getItem('first_interaction') === 'false') {
    localStorage.setItem('first_interaction', Date.now().toString());
  }
};

// Track page exit
export const trackPageExit = async (
  path: string, 
  clickedFeatures: string[] = []
) => {
  const visitorId = getVisitorId();
  const startTime = parseInt(localStorage.getItem('page_start_time') || '0');
  const firstInteraction = parseInt(localStorage.getItem('first_interaction') || '0');
  const totalInteractions = parseInt(localStorage.getItem('total_interactions') || '0');
  const duration = Math.floor((Date.now() - startTime) / 1000); // Convert to seconds
  const timeToFirstInteraction = firstInteraction ? Math.floor((firstInteraction - startTime) / 1000) : null;
  const { utm_source, utm_medium, utm_campaign } = getUtmParams();

  try {
    await supabaseClient.rpc('track_page_view', {
      p_visitor_id: visitorId,
      p_duration: duration,
      p_clicked_features: clickedFeatures,
      p_page_path: path,
      p_referrer: document.referrer,
      p_user_agent: navigator.userAgent,
      p_device_type: getDeviceType(),
      p_scroll_depth: getScrollDepth(),
      p_time_to_first_interaction: timeToFirstInteraction,
      p_total_interactions: totalInteractions,
      p_utm_source: utm_source,
      p_utm_medium: utm_medium,
      p_utm_campaign: utm_campaign
    });
  } catch (error) {
    console.error('Error tracking page exit:', error);
  }
};

// Track feature clicks
export const trackFeatureClick = (feature: string) => {
  trackInteraction();
  const clickedFeatures = JSON.parse(localStorage.getItem('clicked_features') || '[]');
  if (!clickedFeatures.includes(feature)) {
    clickedFeatures.push(feature);
    localStorage.setItem('clicked_features', JSON.stringify(clickedFeatures));
  }
};

// Reset clicked features
export const resetClickedFeatures = () => {
  localStorage.setItem('clicked_features', '[]');
};

interface AnalyticsRecord {
  visitor_id: string;
  timestamp: string;
  duration: number;
  scroll_depth?: number;
  time_to_first_interaction?: number;
  clicked_features: string[];
  utm_source?: string;
  device_type?: string;
  country?: string;
  total_interactions?: number;
}

export interface VisitData {
  total_visitors: number;
  total_visits: number;
  avg_duration: number;
  avg_scroll_depth: number;
  avg_time_to_interaction: number;
  popular_features: Array<{ feature: string; clicks: number }>;
  recent_visits: Array<{ timestamp: string; duration: number }>;
  traffic_sources: Array<{ source: string; count: number }>;
  device_breakdown: Array<{ device: string; count: number }>;
  top_countries: Array<{ country: string; count: number }>;
  engagement_metrics: {
    total_interactions: number;
    bounce_rate: number;
    return_rate: number;
  };
}

export async function fetchAnalytics(): Promise<VisitData> {
  const { data: visits, error } = await supabase
    .from('analytics')
    .select('*')
    .order('timestamp', { ascending: false });

  if (error) {
    console.error('Error fetching analytics:', error);
    throw error;
  }

  const typedVisits = (visits || []) as AnalyticsRecord[];

  // Process the data
  const processedData: VisitData = {
    total_visitors: new Set(typedVisits.map(v => v.visitor_id)).size,
    total_visits: typedVisits.length,
    avg_duration: typedVisits.reduce((acc, v) => acc + v.duration, 0) / typedVisits.length || 0,
    avg_scroll_depth: typedVisits.reduce((acc, v) => acc + (v.scroll_depth || 0), 0) / typedVisits.length || 0,
    avg_time_to_interaction: typedVisits.reduce((acc, v) => acc + (v.time_to_first_interaction || 0), 0) / typedVisits.length || 0,
    popular_features: Object.entries(
      typedVisits.reduce((acc: Record<string, number>, v) => {
        v.clicked_features.forEach((f: string) => {
          acc[f] = (acc[f] || 0) + 1;
        });
        return acc;
      }, {})
    )
      .map(([feature, clicks]) => ({ feature, clicks }))
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 5),
    recent_visits: typedVisits
      .slice(0, 10)
      .map(v => ({ timestamp: v.timestamp, duration: v.duration })),
    traffic_sources: Object.entries(
      typedVisits.reduce((acc: Record<string, number>, v) => {
        const source = v.utm_source || 'direct';
        acc[source] = (acc[source] || 0) + 1;
        return acc;
      }, {})
    )
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count),
    device_breakdown: Object.entries(
      typedVisits.reduce((acc: Record<string, number>, v) => {
        acc[v.device_type || 'unknown'] = (acc[v.device_type || 'unknown'] || 0) + 1;
        return acc;
      }, {})
    )
      .map(([device, count]) => ({ device, count })),
    top_countries: Object.entries(
      typedVisits.reduce((acc: Record<string, number>, v) => {
        acc[v.country || 'unknown'] = (acc[v.country || 'unknown'] || 0) + 1;
        return acc;
      }, {})
    )
      .map(([country, count]) => ({ country, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5),
    engagement_metrics: {
      total_interactions: typedVisits.reduce((acc, v) => acc + (v.total_interactions || 0), 0),
      bounce_rate: (typedVisits.filter(v => v.total_interactions === 0).length / typedVisits.length) * 100 || 0,
      return_rate: (new Set(typedVisits.filter(v => typedVisits.filter(visit => visit.visitor_id === v.visitor_id).length > 1).map(v => v.visitor_id)).size / new Set(typedVisits.map(v => v.visitor_id)).size) * 100 || 0
    }
  };

  return processedData;
} 