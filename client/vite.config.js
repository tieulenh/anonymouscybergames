import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],

    build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: true,
        minify: false,
        target: 'esnext',

        rollupOptions: {
            input: {
                main: './index.html',  
            },
            output: {
                // Bundle files vào assets/
                entryFileNames: 'assets/[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash].[ext]',
            }
        }
    },

    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@utils': '/src/utils',
            '@assets': '/src/assets',
            '@forms': '/src/forms',
            '@styles': '/src/styles',
            '@pages': '/src/pages',
        }
    },

    server: {
        host: '0.0.0.0',
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080/',
                changeOrigin: true,
            }
        },
        mode: 'development'
    }
})