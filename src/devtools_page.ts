import { createApp } from 'vue'
import DevtoolsPage from './pages/devtools_page.vue'

chrome.devtools.panels.create('oh-dev', '', 'src/devtools_page.html', () => {
  console.log('Welcome to oh dev')
})
createApp(DevtoolsPage).mount('body')
