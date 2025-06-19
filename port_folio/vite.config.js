// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ryoma1911.github.io/',  // 例: '/port_folio/'
  plugins: [react()],
})
