<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SubItem from '../SubMenu/SubItem.vue'
import Logo from './components/Logo.vue'
import { useSettingStore } from '@/store/modules/setting'
import { usePermissionStore } from '@/store/modules/permission'

// 在setup中获取store
const route = useRoute()
const SettingStore = useSettingStore()
const PermissionStore = usePermissionStore()

const isCollapse = computed(() => SettingStore.isCollapse)
// 设置
const themeConfig = computed(() => SettingStore.themeConfig)

// 获取路由
const permission_routes = computed(() => PermissionStore.permission_routes)

const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu)
    return meta.activeMenu

  return path
})
</script>

<template>
  <div class="sidebar-container" :class="{ 'has-logo': themeConfig.showLogo }">
    <Logo v-if="themeConfig.showLogo" :is-collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="SettingStore.themeConfig.uniqueOpened"
        :collapse-transition="false"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <SubItem v-for="r in permission_routes" :key="r.path" :item="r" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
}
</style>
