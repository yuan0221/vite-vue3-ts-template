import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

interface extendRoute {
  hidden?: boolean
}

import dataScreenRouter from './modules/dataScreen'
import homeRouter from './modules/home'

export const asyncRoutes = [...dataScreenRouter, ...homeRouter]

export const routes: Array<RouteRecordRaw & extendRoute> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页', icon: 'House' },
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home.vue'),
        name: 'home',
        meta: {
          title: '静态首页',
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
        component: () => import('@/views/DataScreen/index.vue'),
        name: 'dataScreen',
        meta: { title: '静态dataScreen也', icon: 'chat-square' },
      },
    ],
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
