<script lang="ts" setup>
import { Setting } from '@element-plus/icons-vue'
import type { keyType, valueType } from '@/store/modules/setting'
import { useSettingStore } from '@/store/modules/setting'

const SettingStore = useSettingStore()
function changeSwitch(key: keyType, val: valueType) {
  SettingStore.setThemeConfig(key, val)
}
</script>

<template>
  <div class="m-setting">
    <el-tooltip effect="dark" content="主题设置" placement="bottom">
      <el-icon
        style="font-size: 20px"
        class="bell header-icon"
        @click="changeSwitch('showSetting', true)"
      >
        <Setting />
      </el-icon>
    </el-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.transverseMenu {
  .bell {
    color: white;
  }
}
</style>
