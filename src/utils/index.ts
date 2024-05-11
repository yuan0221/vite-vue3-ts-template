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
