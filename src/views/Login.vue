<script setup lang="ts">
import { testGetBlockingTool } from '@/http/api'

const apiDataTest = async () => {
  const res = await testGetBlockingTool({
    offset: 1,
    pageNumber: 1,
    pageSize: 5,
    paged: true,
    'sort.sorted': true
  })
  console.log(res, 'res')
}
</script>

<template>
  <div class="border p-4">
    <h1>Login</h1>
    <el-button type="primary" v-on:click="apiDataTest">get api data</el-button>
  </div>
</template>

<style scoped>

</style>
