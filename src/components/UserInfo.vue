<script setup lang="ts">
import { ERouterName } from '@/router';
import clsx from 'clsx';
import { useRouter } from 'vue-router';

const { className } = defineProps({
  className: String,
})

const router = useRouter()
const logout = () => {
  router.push({
    name: ERouterName.Login
  })
}
</script>

<template>
  <div :class="clsx('flex items-center gap-4 cursor-pointer', className)" @click="logout">
    <span class="text-sm text-white font-bold">用户名</span>
    <img class="w-3 h-3" src="@/assets/img/logout.png" alt="out" />
  </div>
</template>

<style scoped>

</style>
