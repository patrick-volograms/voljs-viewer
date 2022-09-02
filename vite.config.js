import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  base: '/voljs-viewer/',
  server: {
    host: true,
    https: true,
  },
  preview: {
    host: true,
    https: true,
  }
})
