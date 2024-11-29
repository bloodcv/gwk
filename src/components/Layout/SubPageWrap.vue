<script setup lang="ts">
import clsx from 'clsx';

const { className } = defineProps({
  className: String,
})
</script>

<template>
  <div :class="clsx('flex-1 overflow-hidden', className)">
    <slot />
  </div>
</template>

<style scoped>

</style>
