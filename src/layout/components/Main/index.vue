<script lang="ts" setup>
import { computed } from 'vue'
import { useWrapComponents } from '@/hooks/useWrapComponents'
import { useSettingStore } from '@/store/modules/setting'
import { usePermissionStore } from '@/store/modules/permission'

const SettingStore = useSettingStore()
const PermissionStore = usePermissionStore()
const cacheRoutes = computed(() => PermissionStore.keepAliveRoutes)
const isReload = computed(() => SettingStore.isReload)
</script>

<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition
        name="fade-slide"
        mode="out-in"
        appear
      >
        <keep-alive
          v-if="isReload"
          :include="cacheRoutes"
        >
          <component
            :is="useWrapComponents(Component, route)"
            :key="route.path"
          />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.app-main {
  flex: 1;
  display: flex;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;

  .app-main-inner {
    flex: 1;
    display: flex;
    overflow-x: hidden;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
