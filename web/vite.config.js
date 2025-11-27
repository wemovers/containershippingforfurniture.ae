import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Ensure this is correct for your deployment
  plugins: [react()],
  resolve: {
    alias: {
      'slick-carousel/slick/slick.css': 'slick-carousel/slick/slick.css',
      'slick-carousel/slick/slick-theme.css': 'slick-carousel/slick/slick-theme.css'
    }
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist', // or whatever your build directory is
    emptyOutDir: true,
  }
})
