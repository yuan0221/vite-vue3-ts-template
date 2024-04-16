import { defineStore } from 'pinia'

export const useSettingStore = defineStore({
  id: 'settingState',
  state: () => ({
    themeConfig: {
      showSetting: false,
      isDark: false,
      showLogo: true,
      mode: 'vertical',
    },
    isReload: true,
  }),
  getters: {},
  actions: {
    setThemeConfig({ key, val }) {
      this.themeConfig[key] = val
    },
  },
})
