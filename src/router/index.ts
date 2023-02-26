// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'search/record',
        name: 'Search-Record',
        component: () => import('@/views/SearchRecord.vue'),
      },
      {
        path: 'student/found',
        name: 'Record-Found',
        component: () => import('@/views/RecordFound.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
