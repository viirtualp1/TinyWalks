import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue'

import App from './App.vue'
import router from './router.ts'

import './assets/scss/main.scss'

const app = createApp(App).use(IonicVue).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
