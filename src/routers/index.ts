import { createRouter, createWebHashHistory } from 'vue-router'
import listRouter from './modules/list'
import formRouter from './modules/form'
import Layout from '../layout/index.vue'
import { Route } from './types'

export const asyncRoutes = [...formRouter, ...listRouter]

export const routes: Array<Route> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页', icon: 'House' },
    children: [
      {
        path: '/home',
        component: () => import('../views/Home.vue'),
        name: 'home',
        meta: {
          title: '首页',
          icon: 'House',
          affix: true,
          role: ['other'],
        },
      },
    ],
  },
  {
    path: '/dataScreen',
    component: Layout,
    redirect: '/dataScreen/index',
    name: 'dataScreen',
    meta: {
      title: 'dataScreen',
      icon: 'chat-square',
    },
    children: [
      {
        path: '/dataScreen/index',
        component: () => import('../views/DataScreen/index.vue'),
        name: 'dataScreen',
        meta: { title: '大屏', icon: 'chat-square' },
      },
    ],
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
