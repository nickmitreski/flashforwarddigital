import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp', '**/*.svg'],
  build: {
    assetsInlineLimit: 0, // Ensure all assets are processed as files
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  envDir: './', // Explicitly set the directory containing the .env file
  envPrefix: 'VITE_' // Explicitly set the environment variable prefix
}) 