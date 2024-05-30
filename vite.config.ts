import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import type { UserConfig } from 'vitest/config'

const test = {
  watch: false,
  globals: true,
  environment: 'jsdom',
  setupFiles: ['src/__tests__/setupTests.ts'],
} satisfies UserConfig['test']

// https://vitejs.dev/config/
const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: {
    minify: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test,
})
