import Layout from '@/layout/index.vue'

const chartsRouter = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'home',
    meta: {
      title: 'home',
      icon: 'chat-square',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home.vue'),
        name: 'home',
        meta: { title: '动态home也', icon: 'chat-square' },
      },
    ],
  },
]

export default chartsRouter
