<script lang="ts" setup>
import { computed } from 'vue'
import SwitchDark from '@/components/SwitchDark/index.vue'
import type { keyType, valueType } from '@/store/modules/setting'
import { useSettingStore } from '@/store/modules/setting'

const SettingStore = useSettingStore()

const drawer = computed({
  get() {
    return SettingStore.themeConfig.showSetting
  },
  set() {
    changeSwitch('showSetting', !SettingStore.themeConfig.showSetting)
  },
})

// 进行配置
function changeSwitch(key: keyType, val: valueType) {
  SettingStore.setThemeConfig(key, val)
}
</script>

<template>
  <div>
    <el-drawer v-model="drawer" title="设置" size="300px">
      <div class="theme-item">
        <label>暗黑模式</label>
        <SwitchDark />
      </div>
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
::v-deep(.el-drawer__header) {
  border-bottom: 1px solid #ebeef5;
  padding: 15px 20px 14px;
  margin-bottom: 0;
}

.m-setting-fix {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 999;
  padding: 10px 0 0 0;
  margin: 0;
  text-align: center;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-top-left-radius: 5.5px;
  border-bottom-left-radius: 5.5px;
  box-shadow: 0 0 50px 0 rgb(82 63 105 / 15%);
  transform: translateY(-50%);

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    padding: 0 8px 10px 10px;
    margin: 0;
    list-style: none;
  }

  .item-child {
    color: #3698fd;
    width: 60px;
    height: 60px;
    /*padding-top: 10px;*/
    text-align: center;
    display: flex;
    flex-direction: column;
    background: #f6f8f9;
    align-items: center;
    justify-content: center;
    border-radius: 5.5px;
    font-size: 12px;
    background: #ebf5ff;
    transition:
      color 0.15s ease,
      background-color 0.15s ease,
      border-color 0.15s ease,
      box-shadow 0.15s ease;
  }

  .item-child2 {
    margin-top: 10px;
    color: #b37feb;
    background: #f7f2fd;
    transition:
      color 0.15s ease,
      background-color 0.15s ease,
      border-color 0.15s ease,
      box-shadow 0.15s ease;
  }
}

:deep(.el-drawer__title) {
  font-weight: bold;
  color: black;
}

.theme-item {
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  font-size: 14px;
  color: black;
  justify-content: space-between;
}
</style>
