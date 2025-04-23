// Initialize or get analytics state from sessionStorage
if (!sessionStorage.getItem('analytics')) {
    sessionStorage.setItem('analytics', JSON.stringify({
        sessionStartTime: Date.now(),
        clickCount: 0
    }));
}

let analytics = JSON.parse(sessionStorage.getItem('analytics'));

// Update session duration every second
function updateSessionDuration() {
    const durationElement = document.querySelector('[data-analytics="session-duration"]');
    if (!durationElement) return;
    
    const currentTime = Date.now();
    const duration = Math.floor((currentTime - analytics.sessionStartTime) / 1000);
    
    const hours = Math.floor(duration / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((duration % 3600) / 60).toString().padStart(2, '0');
    const seconds = (duration % 60).toString().padStart(2, '0');
    
    durationElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update click count
function updateClickCount() {
    const clickElement = document.querySelector('[data-analytics="total-clicks"]');
    if (!clickElement) return;
    
    analytics.clickCount++;
    sessionStorage.setItem('analytics', JSON.stringify(analytics));
    clickElement.textContent = `${analytics.clickCount} clicks`;
}

// Initialize analytics
export function initAnalytics() {
    // Start session duration timer
    setInterval(updateSessionDuration, 1000);
    
    // Track clicks
    document.addEventListener('click', updateClickCount);
    
    // Initial update
    updateSessionDuration();
    updateClickCount();
}

// Start tracking when the page loads
window.addEventListener('load', initAnalytics); 