import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from '@hono/vite-cloudflare-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages()
  ],
  server: {
    host: '0.0.0.0',
    allowedHosts: true
  },
  build: {
    outDir: 'dist',
  }
})
