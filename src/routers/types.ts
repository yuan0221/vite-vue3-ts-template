import type { RouteRecordRaw } from 'vue-router'

export type Route = RouteRecordRaw & {
  hidden?: boolean
}