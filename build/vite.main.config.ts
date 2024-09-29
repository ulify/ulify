import { defineConfig } from 'vite';
import path from 'node:path';

// https://vitejs.dev/config
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['sqlite3']
    }
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@': path.join(__dirname, '..', 'src/renderer'),
      '@main': path.join(__dirname, '..', 'src/main'),
      '@config': path.join(__dirname, '..', 'src/config')
    }
  }
});
