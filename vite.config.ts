// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'
import path from 'path'

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      mkcert(),
    ],
    resolve: {
      alias: {
        '@widgets': path.resolve(__dirname, "src/widgets"),
        '@shared': path.resolve(__dirname, "src/shared"),
        '@features': path.resolve(__dirname, "src/features"),
        '@entities': path.resolve(__dirname, "src/entities"),
      },
    },
    server: {
      port: Number(process.env.VITE_APP_DEV_PORT) || 3000,
      host: 'localhost',
    },
  }
})
