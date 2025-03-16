import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    // Force clear cache
    force: true,
  },
  optimizeDeps: {
    // Force re-optimization of dependencies
    force: true
  }
})
