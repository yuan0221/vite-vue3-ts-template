<template>
  <el-menu-item :index="subItem.path" @click="handleClickMenu(subItem)">
    <el-icon>
      <component :is="subItem?.meta?.icon"></component>
    </el-icon>
    <template #title>
      <span>{{ subItem?.meta?.title }}</span>
    </template>
  </el-menu-item>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps({
  menuList: {
    type: Array,
    default: () => [],
  },
  subItem: {
    type: Object,
    default: () => {},
  },
})

const handleClickMenu = (subItem) => {
  router.push(subItem.path)
}
</script>
