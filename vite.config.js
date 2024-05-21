import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true, // automatically open the app in the browser on server start
    hot: true, // enables hot module replacement (HMR)
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        listings: '/src/pages/listings/index.html',
        profile: '/src/pages/profile/index.html',
        singleItem: '/src/pages/single-item/index.html',
      },
    },
  },
});
