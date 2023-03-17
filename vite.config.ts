/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    css: false,
    coverage: {
      exclude: [...configDefaults.exclude, 'src/types/*', 'src/main.tsx', '**/*.d.ts '],
      provider: 'c8',
      reporter: ['text'],
      all: true,
    },
  },
});
