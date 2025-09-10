import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ici je dis "Quand tu vois @, ça veut dire src/”.
      '@': path.resolve(__dirname, './src'),
    },
  },
})
