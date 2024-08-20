// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import svgr from 'vite-plugin-svgr';

// export default defineConfig({
//   plugins: [react(), svgr()],
//   resolve: {
//     alias: {
//       src: '/src',
//       components: '/src/components',
//       pages: '/src/pages',
//       assets: '/src/assets',
//     },
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  base: '/zbir-na-amuniciu',
});
