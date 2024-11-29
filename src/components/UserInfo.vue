<script setup lang="ts">
import clsx from 'clsx';

const { className } = defineProps({
  className: String,
})
</script>

<template>
  <div :class="clsx('flex items-center gap-4 cursor-pointer', className)">
    <span class="text-sm text-white font-bold">用户名</span>
    <img class="w-3 h-3" src="@/assets/img/logout.png" alt="out" />
  </div>
</template>

<style scoped>

</style>
