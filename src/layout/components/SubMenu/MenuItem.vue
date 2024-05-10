<script setup lang="ts">
import { useRouter } from 'vue-router'

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
const router = useRouter()
function handleClickMenu(subItem) {
  router.push(subItem.path)
}
</script>

<template>
  <el-menu-item
    :index="subItem.path"
    @click="handleClickMenu(subItem)"
  >
    <el-icon>
      <component :is="subItem?.meta?.icon" />
    </el-icon>
    <template #title>
      <span>{{ subItem?.meta?.title }}</span>
    </template>
  </el-menu-item>
</template>
