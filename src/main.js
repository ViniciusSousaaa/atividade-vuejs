import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { toastService } from './services/toastService'

const app = createApp(App)

app.config.globalProperties.$toast = toastService

app.mount('#app')