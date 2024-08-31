import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue'

import App from './App.vue'
import router from './router.ts'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

/* Custom SCSS */
import './assets/scss/main.scss'

const app = createApp(App).use(IonicVue).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
