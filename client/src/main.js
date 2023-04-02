import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

import './assets/css/main.css'

const app = createApp(App)

const pinia = createPinia()

app.use(vue3GoogleLogin, {
  clientId: '47858928833-h1sesej6vsoo36lbl4ghbbjt267v16u6.apps.googleusercontent.com'
})

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.mount('#app')
