import { defineConfig } from 'vite'
import { patchCssModules } from 'vite-css-modules'
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: '/fds-deisgn/',
  plugins: [react(), patchCssModules()],
  css: {
    modules: {
      scopeBehaviour: 'local', // Enables CSS Modules
      localsConvention: 'camelCase', // Converts kebab-case to camelCase
    },
  },
  optimizeDeps: {
    include: ['@storybook/mdx2-csf'],
    exclude: ['@storybook/preview-api', '@storybook/addon-docs'],
  }
})
