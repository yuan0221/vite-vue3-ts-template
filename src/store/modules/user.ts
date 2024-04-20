import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'userState',
  state: () => ({
    token: null,
    userInfo: {},
    roles: localStorage.roles ? JSON.parse(localStorage.roles) : [],
  }),
  getters: {},
  actions: {},
})
