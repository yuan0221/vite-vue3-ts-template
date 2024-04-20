import { defineStore } from 'pinia'

interface IThemeConfig {
  showSetting: boolean
  isDark: boolean
  showLogo: boolean
  mode: 'vertical'
  fixedHeader: boolean
  showTag: boolean
  uniqueOpened: boolean
}

interface IReturnState {
  themeConfig: Partial<IThemeConfig>
  isReload: boolean
  isCollapse: boolean
}

const returnState: IReturnState = {
  themeConfig: {
    showSetting: false,
    isDark: false,
    showLogo: true,
    mode: 'vertical',
    fixedHeader: true,
    showTag: false,
  },
  isReload: true,
  isCollapse: false,
}

export type keyType = keyof IThemeConfig
export type valueType = IThemeConfig[keyof IThemeConfig]

export const useSettingStore = defineStore({
  id: 'settingState',
  state: () => returnState,
  getters: {},
  actions: {
    setThemeConfig(key: keyType, val: valueType) {
      this.themeConfig[key] = val as never
    },
  },
})
