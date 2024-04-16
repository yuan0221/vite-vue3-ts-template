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

<script lang="ts" setup>
import { useSettingStore } from '@/store/modules/setting'
import { Setting } from '@element-plus/icons-vue'
const SettingStore = useSettingStore()
const changeSwitch = (key, val) => {
  SettingStore.setThemeConfig({ key, val })
}
</script>

<style lang="scss" scoped>
.transverseMenu {
  .bell {
    color: white;
  }
}
</style>
