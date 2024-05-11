/**
 * @description 使用递归，过滤需要缓存的路由
 * @param {Array} _route 所有路由表
 * @param {Array} _cache 缓存的路由表
 * @return void
 */

import { Route } from 'src/routers/types'
import type { Awaitable } from './types'

export function filterKeepAlive(routers: Route[]) {
  const cacheRouter: any[] = []
  const deep = (routers: Route[]) => {
    routers.forEach((item) => {
      if (item.meta?.keepAlive && item.name)
        cacheRouter.push(item.name)

      if (item.children && item.children.length)
        deep(item.children)
    })
  }
  deep(routers)
  return cacheRouter
}

export function filterAsyncRoutes(routes: Route[], roles: string[]) {
  const res:Route[] = []
  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

export function hasPermission(roles: string[], route: Route) {
  const rs = Object.values(roles)

  if (route.meta && route.meta.role) {
    const metaRoles = route.meta.role as string[];
    return rs.some((role) => metaRoles.includes(role))
  } else {
    return false
  }
}

export async function interopDefault<T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m
  return (resolved as any).default || resolved
}

export function renameRules(rules: Record<string, any>, map: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([key, value]) => {
        for (const [from, to] of Object.entries(map)) {
          if (key.startsWith(`${from}/`))
            return [to + key.slice(from.length), value]
        }
        return [key, value]
      }),
  )
}
