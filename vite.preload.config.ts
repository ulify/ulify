import { defineConfig } from 'vite';
import path from 'node:path';

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@': path.join(__dirname, '..', 'src/renderer'),
      '@main': path.join(__dirname, '..', 'src/main'),
      '@config': path.join(__dirname, '..', 'src/config')
    }
  }
});
