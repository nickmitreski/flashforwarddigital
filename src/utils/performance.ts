import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

type MetricName = 'CLS' | 'FID' | 'LCP' | 'FCP' | 'TTFB';

interface PerformanceMetric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const sendToAnalytics = (metric: PerformanceMetric) => {
  // Replace this with your analytics implementation
  console.log(`Performance Metric - ${metric.name}:`, {
    value: metric.value,
    rating: metric.rating
  });
};

export const initPerformanceMonitoring = () => {
  // Cumulative Layout Shift (CLS)
  onCLS(metric => {
    sendToAnalytics({
      name: 'CLS',
      value: metric.value,
      rating: metric.rating
    });
  });

  // First Input Delay (FID)
  onFID(metric => {
    sendToAnalytics({
      name: 'FID',
      value: metric.value,
      rating: metric.rating
    });
  });

  // Largest Contentful Paint (LCP)
  onLCP(metric => {
    sendToAnalytics({
      name: 'LCP',
      value: metric.value,
      rating: metric.rating
    });
  });

  // First Contentful Paint (FCP)
  onFCP(metric => {
    sendToAnalytics({
      name: 'FCP',
      value: metric.value,
      rating: metric.rating
    });
  });

  // Time to First Byte (TTFB)
  onTTFB(metric => {
    sendToAnalytics({
      name: 'TTFB',
      value: metric.value,
      rating: metric.rating
    });
  });
}; 