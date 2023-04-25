/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false }), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    css: false,
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        'src/types/*',
        'src/main.tsx',
        '**/*.d.ts ',
        'src/clientApp.tsx',
        'src/serverApp.tsx',
        '**/server.ts',
        '**/vite.server.config.ts',
      ],
      provider: 'c8',
      reporter: ['text'],
      all: true,
    },
  },
  build: {
    outDir: './dist/client',
    sourcemap: true,
    rollupOptions: {
      input: path.resolve('./src/clientApp.tsx'),
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
