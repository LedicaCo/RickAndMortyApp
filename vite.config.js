import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://ledicaco.github.io/RickAndMortyApp/',
  server: {
    host: true,
    open: true
  }
})
