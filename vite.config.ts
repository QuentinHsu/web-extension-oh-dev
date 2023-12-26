import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import webExtension from 'vite-plugin-web-extension'
import { configManifest } from './src/config/manifest'

const alias = {
  '@': path.join(__dirname, 'src'),
}

function generateManifest() {
  return configManifest
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    webExtension({
      manifest: generateManifest,
      watchFilePaths: ['package.json', 'manifest.json'],
    }),
  ],
  resolve: { alias },
})
