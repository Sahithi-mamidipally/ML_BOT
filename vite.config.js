import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'your-repo-name' to the name of your GitHub repository if hosting in a subdirectory
export default defineConfig({
  base: '/ML_BOT/',  // Uncomment and replace if necessary
  plugins: [react()],
})
