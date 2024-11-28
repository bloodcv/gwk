<script setup lang="ts">
import clsx from 'clsx';

  const { className } = defineProps({
    className: String,
  })
</script>

<template>
  <div v-bind:class="clsx('w-screen h-screen overflow-hidden', className)">
    <slot />
  </div>
</template>
