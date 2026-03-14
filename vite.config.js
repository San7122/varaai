import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/varaai/', // 👈 Replace 'varaai' with your GitHub repo name
});
