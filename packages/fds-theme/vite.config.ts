import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const themeHashes = {
  global: 'XhWg9q',
  light: 'YqfL3a',
  dark: 'R-l9gW',
  medium: 'rfm_fq',
  large: '_1DrGeG',
};
// Generate hash based on theme
const generateScopedName = (name, theme) => {
  const hash = themeHashes[theme] || themeHashes.global; // Default to global
  return `${hash}_${name}`;
};

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
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/fonts',
          dest: 'assets',
        },
      ],
    })
  ],
  css: {
    modules: {
      generateScopedName: (name, filename) => {
        if (filename.includes('light')) return generateScopedName(name, 'light');
        if (filename.includes('dark')) return generateScopedName(name, 'dark');
        if (filename.includes('medium')) return generateScopedName(name, 'medium');
        if (filename.includes('large')) return generateScopedName(name, 'large');
        return generateScopedName(name, 'global');
      },
    },
  },
});
