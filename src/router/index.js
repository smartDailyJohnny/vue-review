import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/build',
      name: 'build',
      component: () => import('@/components/build/RobotBuilder.vue')
    }
  ]
})

export default router
