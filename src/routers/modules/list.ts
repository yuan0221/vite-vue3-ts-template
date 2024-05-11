import Layout from '../../layout/index.vue'
import { Route } from '../types'

const listRouter: Array<Route> = [
  {
    path: '/',
    component: Layout,
    redirect: '/list',
    name: 'list',
    meta: {
      title: 'list',
      icon: 'chat-square',
      role: ['seller']
    },
    children: [
      {
        path: '/list',
        component: () => import('../../views/list/index.vue'),
        name: 'list',
        meta: { title: 'list', icon: 'chat-square', role: ['seller'], },
      },
    ],
  },
]

export default listRouter
