import { defineStore } from 'pinia'

type Theme = {
  showSetting: boolean,
  isDark: boolean,
  showLogo: boolean,
  mode: 'vertical',
  fixedHeader: boolean,
  showTag: boolean,
}

export const useSettingStore = defineStore({
  id: 'settingState',
  state: () => ({
    themeConfig: {
      showSetting: false,
      isDark: false,
      showLogo: true,
      mode: 'vertical',
      fixedHeader: true,
      showTag: false,
    } as Theme,
    isReload: true,
    isCollapse: false,
  }),
  getters: {},
  actions: {
    setThemeConfig<T extends keyof Theme>(key: T, val: Theme[T]): void {
      this.themeConfig[key] = val;
    }
  },
})

