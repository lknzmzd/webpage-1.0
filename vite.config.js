import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/webpage-1.0/',
  plugins: [react()],
})
