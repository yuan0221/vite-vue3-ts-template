<script setup lang="ts" name="switchDark">
import { computed } from 'vue'
import { useSettingStore } from '@/store/modules/setting'

const SettingStore = useSettingStore()
const themeConfig = computed(() => SettingStore.themeConfig)

function switchDark() {
  const body = document.documentElement as HTMLElement
  if (themeConfig.value.isDark)
    body.setAttribute('class', 'dark')
  else body.setAttribute('class', '')
}
</script>

<template>
  <el-switch v-model="themeConfig.isDark" inline-prompt @change="switchDark" />
</template>
