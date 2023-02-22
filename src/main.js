import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import useStore from './stores/index'
import './assets/index.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.config.globalProperties.store = useStore();
app.use(router)
app.mount('#app')
