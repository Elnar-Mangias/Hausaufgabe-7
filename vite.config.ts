import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ВАЖНО: замени REPO_NAME на точное имя твоего репозитория на GitHub
export default defineConfig({
  plugins: [react()],
  base: '/REPO_NAME/',
})
