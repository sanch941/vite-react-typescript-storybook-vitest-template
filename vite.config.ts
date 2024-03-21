import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import viteCompression from 'vite-plugin-compression'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => ({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
  ],
  build: {
    rollupOptions: {
      plugins: [viteCompression()],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/shared/config/tests/setup.ts',
    mockReset: true,
  },
}))
// server: {
//     proxy: {
//         '/some-api': {
//             target: 'http://localhost:3000',
//             changeOrigin: true,
//             rewrite: (path) => path.replace(/^\/some-api/, '')
//         }
//     }
// }
