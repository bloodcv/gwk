<script setup lang="ts">
import clsx from 'clsx';

const { className } = defineProps({
  className: String,
})
</script>

<template>
  <div :class="clsx('', className)">
    <slot />
  </div>
</template>

<style scoped>

</style>
