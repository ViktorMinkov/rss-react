/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: './dist/server',
    rollupOptions: {
      input: path.resolve('./src/serverApp.tsx'),
      output: {
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
