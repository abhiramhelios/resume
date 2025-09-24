import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or whatever plugin you use

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cv-2025/', // <--- Add this line!
  plugins: [react()],
})