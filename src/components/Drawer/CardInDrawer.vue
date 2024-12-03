<script setup lang="ts">
const { title } = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="bg-white rounded-r20">
    <h3 v-if="title" class="pl-6 pt-4 pb-2 text-font-c1 font-semibold border-b border-solid border-[#EEE]">
      {{ title }}
    </h3>
    <div class="p-6 pb-[6px]">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
