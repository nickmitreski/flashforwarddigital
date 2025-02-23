// Analytics utility for tracking user interactions and session duration

interface AnalyticsEvent {
  type: string;
  details?: Record<string, any>;
  timestamp: number;
}

class Analytics {
  private static instance: Analytics;
  private events: AnalyticsEvent[] = [];
  private sessionStartTime: number;
  private clickCount: number = 0;

  private constructor() {
    this.sessionStartTime = Date.now();
    this.setupClickTracking();
  }

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  private setupClickTracking() {
    document.addEventListener('click', (e) => {
      this.trackClick(e);
    });
  }

  private trackClick(e: MouseEvent) {
    this.clickCount++;
    const target = e.target as HTMLElement;
    const eventDetails = {
      elementType: target.tagName,
      elementId: target.id,
      elementClass: target.className,
      x: e.clientX,
      y: e.clientY,
      clickCount: this.clickCount
    };

    this.trackEvent('click', eventDetails);
  }

  public trackEvent(type: string, details?: Record<string, any>) {
    const event: AnalyticsEvent = {
      type,
      details,
      timestamp: Date.now()
    };
    this.events.push(event);
    console.log('Analytics Event:', event); // For development
  }

  public getSessionDuration(): string {
    const now = Date.now();
    const diff = now - this.sessionStartTime;
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  public getTotalClicks(): number {
    return this.clickCount;
  }

  public getAllEvents(): AnalyticsEvent[] {
    return this.events;
  }
}

export const analytics = Analytics.getInstance(); 