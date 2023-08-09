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
      path: '/parts/browse',
      name: 'BrowseParts',
      component: () => import('@/components/parts/BrowseParts.vue'),
      children: [
        {
          name: 'BrowseHeads',
          path: 'heads',
          component: () => import('@/components/parts/RobotHeads.vue'),
        },
        {
          name: 'BrowseArms',
          path: 'arms',
          component: () => import('@/components/parts/RobotArms.vue'),
        },
        {
          name: 'BrowseTorsos',
          path: 'torsos',
          component: () => import('@/components/parts/RobotTorsos.vue'),
        },
        {
          name: 'BrowseBases',
          path: 'bases',
          component: () => import('@/components/parts/RobotBases.vue'),
        }
      ]
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: () => import('@/components/parts/PartInfo.vue'),
    },

  ]
})

export default router
