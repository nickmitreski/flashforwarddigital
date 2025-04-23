import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './lib/theme-provider'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>
);
