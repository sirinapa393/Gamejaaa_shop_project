import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './style.css'

import { createPinia } from 'pinia'
const pinia = createPinia()


const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')


