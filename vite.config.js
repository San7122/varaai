import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Works for Vercel (primary) and can work for GitHub Pages with proper config
});
