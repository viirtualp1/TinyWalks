import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import Home from './pages/Home.vue'
import Story from './pages/Story.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/story/:id',
    name: 'Story',
    component: Story,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
