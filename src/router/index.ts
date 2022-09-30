import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>import('@/views/index.vue')
    },
    {
      path: '/text',
      name: 'text',
      component: ()=>import('@/views/text/text.vue')
    },

  ]
})

export default router
