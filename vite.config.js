import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // sets the root directory for the Vite project
  server: {
    // server-specific configurations
    open: true, // automatically open the app in the browser on server start
    hot: true, // enables hot module replacement (HMR)
  },
  // include other configurations here as needed
});
