import { defineStore, createPinia } from 'pinia'

export const Store = defineStore({
  id: 'globalState',
  state: () => ({}),
  getters: {},
  actions: {},
})

const pinia = createPinia()
export default pinia
