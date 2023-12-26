/* eslint perfectionist/sort-objects: "error" */

import { readJsonFile } from 'vite-plugin-web-extension'

const { version } = readJsonFile('package.json')
export const configManifest = {
  background: {
    service_worker: 'src/config/background.ts',
  },
  description: 'AnyLater is a browser extension that allows you save any page to anywhere.',
  devtools_page: 'src/devtools_page.html',
  manifest_version: 3,
  name: 'AnyLater',
  version,
}
