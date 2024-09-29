import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'node:path';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      template: 'index.html',
      entry: 'src/renderer/windows/main/index.tsx'
    })
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@': path.join(__dirname, '..', 'src/renderer'),
      '@main': path.join(__dirname, '..', 'src/main'),
      '@config': path.join(__dirname, '..', 'src/config')
    }
  }
});
