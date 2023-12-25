/* eslint perfectionist/sort-imports: "error" */
/* eslint perfectionist/sort-objects: "error" */
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import webExtension, { readJsonFile } from 'vite-plugin-web-extension'

function generateManifest() {
  const manifest = readJsonFile('src/manifest.json')
  const pkg = readJsonFile('package.json')
  return {
    description: pkg.description,
    name: pkg.name,
    version: pkg.version,
    ...manifest,
  }
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
})
