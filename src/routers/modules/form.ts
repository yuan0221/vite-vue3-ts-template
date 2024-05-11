
import Layout from '../../layout/index.vue'
import { Route } from '../types'

const formRouter: Array<Route> = [
  {
    path: '/form',
    component: Layout,
    redirect: '/form/index',
    name: 'form',
    meta: {
      title: 'form',
      icon: 'chat-square',
      role: ['seller']
    },
    children: [
      {
        path: '/form/index',
        component: () => import('../../views/form/index.vue'),
        name: 'form',
        meta: { title: 'form', icon: 'chat-square', role: ['seller'], },
      },
    ],
  },
]

export default formRouter
