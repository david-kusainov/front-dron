import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'
import path from 'path'
// https://vitejs.dev/config/  .
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      mkcert(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: Number(process.env.VITE_APP_DEV_PORT) || 3000,
      host: 'localhost',
    },
  }
})
