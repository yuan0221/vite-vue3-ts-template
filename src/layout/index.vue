<script lang="ts" setup>
import { computed, watch } from 'vue'
import LayoutVertical from './LayoutVertical/index.vue'
import Theme from '@/components/Theme/index.vue'
import { useSettingStore } from '@/store/modules/setting'

const SettingStore = useSettingStore()
const themeConfig = computed(() => SettingStore.themeConfig)
const LayoutComponents = {
  vertical: LayoutVertical,
}

watch(
  () => 'desktop',
  (val) => {
    const vertical = val === 'mobile' ? 'vertical' : themeConfig.value.mode
    const body = document.body as HTMLElement
    body.setAttribute('class', `layout-${vertical}`)
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="g-container-layout">
    <component :is="LayoutComponents[themeConfig.mode]" />
    <Theme />
  </div>
</template>

<style lang="scss" scoped>
.g-container-layout {
  height: 100%;
  width: 100%;

  .main-container {
    display: flex;
    flex: 1;
    box-sizing: border-box;
    flex-direction: column;
  }

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.sidebar-container {
  display: flex;
  flex-direction: column;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 90;
}
</style>
