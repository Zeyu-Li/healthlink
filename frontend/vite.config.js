import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Same port as Create React App: the backend's socket.io CORS setting expects localhost:3000.
  server: { port: 3000 },
  // Keep CRA's output folder so existing deploy settings keep working.
  build: { outDir: 'build' },
});
