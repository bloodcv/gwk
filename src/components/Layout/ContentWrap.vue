<script setup lang="ts">
import clsx from 'clsx';

const { className } = defineProps({
  className: String,
})
</script>

<template>
  <div :class="clsx('bg-white rounded-[1.25rem] shadow-[0px_1px_12px_0px_rgba(45,49,56,0.1)] px-4 pt-4 pb-8 h-fit max-h-full overflow-hidden flex flex-col', className)">
    <slot />
  </div>
</template>

<style scoped>

</style>
