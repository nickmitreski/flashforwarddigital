import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from 'vite-imagetools';

// https://vitejs.dev/config/
// This configuration ensures proper handling of static assets
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    imagetools({
      defaultDirectives: new URLSearchParams({
        format: 'webp',
        quality: '80',
        w: '800',
        as: 'picture'
      })
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    },
    copyPublicDir: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    sourcemap: mode === 'development',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
      },
    },
    emptyOutDir: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  publicDir: 'public',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  base: './'
}));
