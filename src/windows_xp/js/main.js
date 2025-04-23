import "./system.js";
import "./desktop.js";
import "./windowManager.js";
import "./init.js";
import "./errorWindow.js";
import "./errorTester.js";
import "./bonziBuddy.js";
import "./horror.js";
import "./taskManager.js";
import "./openWith.js";
import { initAnalytics } from './analytics.js';

// Initialize analytics when the page loads
document.addEventListener('DOMContentLoaded', () => {
  initAnalytics();
});


