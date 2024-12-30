import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'FdsTheme',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@react-spectrum/provider'],
    },
    outDir: 'dist',
    sourcemap: true,
  },
  plugins: [
    dts({
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
});
