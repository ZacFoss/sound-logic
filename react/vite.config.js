import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    include: ['**/*.test.js', '**/*.test.jsx', '**/*.test.tsx', '**/tests/*.test.js'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        '**/main.tsx',
        '**/vite-env.d.ts',
        '**/__tests__/**',
        '**/*.test.*',
        'node_modules/**',
      ],
    },
  },
})