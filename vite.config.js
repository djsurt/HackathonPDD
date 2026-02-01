import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // Register the React plugin to enable Fast Refresh and JSX support
  plugins: [react()],

  // Development server configuration
  server: {
    port: 3000, // Default port set to 3000
    open: true, // Automatically open the app in the browser on server start
  },

  // Build configuration for production
  build: {
    outDir: 'dist', // Output directory for production build
    sourcemap: false, // Disable sourcemaps in production for smaller bundle size
    emptyOutDir: true, // Clean the output directory before building
    rollupOptions: {
      output: {
        // Manual chunks configuration to split vendor code for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },

  // Module resolution and path aliasing
  resolve: {
    alias: {
      // Maps '@' to the 'src' directory for cleaner imports (e.g., import Button from '@/components/Button')
      '@': path.resolve(__dirname, './src'),
    },
  },
});