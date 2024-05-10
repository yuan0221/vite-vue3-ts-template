import { defineStore } from 'pinia'
import { asyncRoutes, routes, routesType } from '../../routers'
import { filterKeepAlive } from '../../utils'

export const usePermissionStore = defineStore({
  id: 'permissionState',
  state: () => ({
    routes: [],
    addRoutes: [],
    cacheRoutes: {},
  }),
  getters: {
    permission_routes: (state) => {
      return state.routes
    },
    keepAliveRoutes: () => {
      return filterKeepAlive(asyncRoutes)
    },
  },
  actions: {
    // 生成路由
    generateRoutes(roles: string[]) {
      return new Promise((resolve) => {
        let accessedRoutes: routesType[] = []

        if (roles && roles.length && !roles.includes('admin')) {
          // accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        } else {
          accessedRoutes = asyncRoutes || []
        }
        this.routes = routes.concat(accessedRoutes)
        this.addRoutes = accessedRoutes
        
        resolve(accessedRoutes)
      })
    },
  },
})
