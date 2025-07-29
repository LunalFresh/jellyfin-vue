import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: 'node'
  }
});

export default defineConfig({
  test: {
  });
