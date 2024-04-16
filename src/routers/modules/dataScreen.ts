import Layout from '@/layout/index.vue'

const dataScreenRouter = [
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
        meta: { title: '动态dataScreen也', icon: 'chat-square' },
      },
    ],
  },
]

export default dataScreenRouter
