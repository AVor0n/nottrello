import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import vueDevTools from 'vite-plugin-vue-devtools'
import typescriptPaths from 'vite-tsconfig-paths'

dotenv.config({ path: resolve(process.cwd(), '../.env') })
const port = +(process.env.FRONT_PORT || 3000)
const serverPort = +(process.env.SERVER_PORT || 8080)

// https://vite.dev/config/
export default defineConfig({
  server: {
    port,
    strictPort: true,
    proxy: {
      '/api/v1': {
        target: `http://localhost:${serverPort}`,
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    typescriptPaths(),
    checker({
      overlay: false,
      typescript: true,
    }),
  ],
})
