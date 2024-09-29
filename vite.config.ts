import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const htmlPlugin = (): Plugin => {
  return {
    name: 'html-transform',
    transformIndexHtml(html: string) {
      return html.replace(
        '</title>',
        `</title>\n    <script src="/mytodolist/assets/coi-serviceworker.js"></script>`,
      );
    },
  };
};

export default defineConfig({
  base: '/mytodolist/',
  plugins: [react(), htmlPlugin()],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  optimizeDeps: {
    exclude: ['@sqlite.org/sqlite-wasm'],
  },
});
