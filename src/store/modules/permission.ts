import { defineStore } from 'pinia'
import { asyncRoutes, routes } from '../../routers'
import { filterAsyncRoutes, filterKeepAlive } from '../../utils'
import { Route } from 'src/routers/types'

export const usePermissionStore = defineStore({
  id: 'permissionState',
  state: () => ({
    routes: [] as Route[],
    addRoutes: [] as Route[],
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
        let accessedRoutes: Route[] = []
        const rs = Object.values(roles)

        if (rs && rs.length && !rs.includes('admin')) {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)  
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
