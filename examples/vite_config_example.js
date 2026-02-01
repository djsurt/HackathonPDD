/**
 * USAGE EXAMPLE: Vite Configuration for React
 * 
 * This example demonstrates how to integrate the provided `vite.config.js` 
 * into a standard React project structure.
 * 
 * 1. FILE PLACEMENT:
 *    Save the provided code module as `vite.config.js` in the root of your project.
 * 
 * 2. PROJECT STRUCTURE:
 *    my-react-app/
 *    ├── vite.config.js      <-- The module provided
 *    ├── package.json
 *    ├── index.html
 *    └── src/
 *        ├── main.jsx
 *        ├── App.jsx
 *        └── components/
 *            └── Button.jsx
 * 
 * 3. USAGE IN CODE (Path Aliasing):
 *    Because the config defines an alias ('@' -> './src'), you can import 
 *    components cleanly from anywhere in your app without dot-dot hell.
 */

// Example file: src/App.jsx
// Instead of: import Button from '../../components/Button';
import Button from '@/components/Button'; 

export default function App() {
  return (
    <div>
      <h1>Hello Vite!</h1>
      <Button label="Click me" />
    </div>
  );
}

/**
 * 4. RUNNING THE CONFIGURATION:
 *    The configuration is automatically loaded when you run Vite CLI commands
 *    defined in your package.json.
 * 
 *    // package.json scripts:
 *    "scripts": {
 *      "dev": "vite",      // Uses server.port: 3000
 *      "build": "vite build", // Uses build.outDir: 'dist'
 *      "preview": "vite preview"
 *    }
 * 
 *    Command: npm run dev
 *    Result: Starts dev server at http://localhost:3000 and opens browser.
 * 
 *    Command: npm run build
 *    Result: Creates optimized production build in ./dist/ folder with 
 *            vendor chunk splitting as defined in rollupOptions.
 */