import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dad-Joke',
      component: () => import('../views/DadJokeView.vue')
    }
  ]
})

export default router
