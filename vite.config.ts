import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    base: '/login/',
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: [
                    [
                        '@emotion/babel-plugin',
                        {
                            sourceMap: false
                        }
                    ]
                ]
            }
        }),
        tsconfigPaths()
    ],
    build: {
        minify: 'terser',
        rollupOptions: {
            plugins: [viteCompression()]
        }
    },
    server: {
        proxy: {
            '/relog-local-api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/relog-local-api/, '')
            }
        }
    }
});
