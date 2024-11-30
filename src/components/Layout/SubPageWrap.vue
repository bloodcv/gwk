<script setup lang="ts">
import clsx from 'clsx';

const { className } = defineProps({
  className: String,
})
</script>

<template>
  <div :class="clsx('flex-1 overflow-hidden py-5 px-6', className)">
    <ContentWrap>
      <slot />
    </ContentWrap>
  </div>
</template>

<style scoped>

</style>
