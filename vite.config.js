// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import eslint from 'vite-plugin-eslint';
// import stylelint from 'vite-plugin-stylelint';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), eslint(), stylelint()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      assets: '/src/assets',
    },
  },
  base: '/zbir-na-amuniciu',
});
