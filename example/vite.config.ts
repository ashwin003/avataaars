import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Import the library straight from its source so edits in ../src hot-reload
// here without rebuilding dist/.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      avataaars: fileURLToPath(new URL('../src/index.tsx', import.meta.url)),
    },
    // ../src has no React of its own; make it use this app's copy.
    dedupe: ['react', 'react-dom'],
  },
  // Most of the bundle is SVG path data, which doesn't split usefully.
  build: { chunkSizeWarningLimit: 1024 },
})
