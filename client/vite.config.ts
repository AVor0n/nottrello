import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import typescriptPaths from 'vite-tsconfig-paths';

dotenv.config({ path: resolve(process.cwd(), '../.env') });

// https://vitejs.dev/config/
export default defineConfig(() => {
  const port = +(process.env.FRONT_PORT || 3000);
  const serverPort = +(process.env.SERVER_PORT || 8080);

  return {
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
      react(),
      typescriptPaths(),
      checker({
        overlay: false,
        typescript: true,
      }),
    ],
  };
});
