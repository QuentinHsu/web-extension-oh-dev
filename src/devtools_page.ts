import { createApp } from 'vue'
import DevtoolsPage from './pages/devtools_page.vue'
import router from './router'

chrome.devtools.panels.create('oh-dev', '', 'src/devtools_page.html', () => {
})
const app = createApp(DevtoolsPage)
app.use(router).mount('body')
