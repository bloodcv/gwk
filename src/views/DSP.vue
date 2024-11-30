<script setup lang="ts">


</script>

<template>
  <SubPageWrap>
    <QueryCom formActionClassName="basis-full">
      <template #formAction>
        <el-button type="primary">Search</el-button>
      </template>
      <template #extraAction>
        <el-button type="primary">Create</el-button>
      </template>
    </QueryCom>
    <TableCom />
  </SubPageWrap>
</template>

<style scoped>

</style>
