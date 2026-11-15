import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.vue']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'DcpVueBasicComponents',
      fileName: (format) => `dcp-vue-basic-components.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue',
        'vuetify',
        'rxjs',
        'vue-i18n',
        '@open-dcp/styles',
        '@open-dcp/utilities',
        'date-fns',
        'date-fns-tz',
        'lodash-es',
        'uuid',
        '@mdi/font',
        /^vuetify(\/.*)?$/,
        /^@open-dcp\/.*/,
        /^date-fns(\/.*)?$/
      ],
      output: {
        exports: "named"
      }
    },
  },
});