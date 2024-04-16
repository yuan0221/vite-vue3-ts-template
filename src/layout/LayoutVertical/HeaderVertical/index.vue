<template>
  <!--纵向布局-->
  <Height />
  <div
    class="m-layout-header"
    :class="{
      'fixed-header': themeConfig.fixedHeader,
      collapse: themeConfig.fixedHeader && isCollapse,
      'no-collapse': themeConfig.fixedHeader && !isCollapse,
    }"
  >
    <div class="header-inner">
      <HeaderToolLeft />
      <HeaderToolRight />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Height from '../../components/Header/components/Height.vue'
import HeaderToolRight from '../../components/Header/ToolRight.vue'
import HeaderToolLeft from '../../components/Header/ToolLeft.vue'

import { computed } from 'vue'
import { useSettingStore } from '@/store/modules/setting'

const SettingStore = useSettingStore()
const themeConfig = computed(() => SettingStore.themeConfig)
const isCollapse = computed(() => !SettingStore.isCollapse)
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
