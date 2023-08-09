import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/build',
      name: 'Build',
      component: () => import('@/components/build/RobotBuilder.vue')
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: () => import('@/components/parts/PartsInfo.vue'),
    }
  ]
})

export default router
