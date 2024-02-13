import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port:  5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
    },
  },
  optimizeDeps: {
    exclude: ['bcrypt'],
  },
});