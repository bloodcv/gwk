<script setup lang="ts">
import { ERouterName, routerMapFlat } from '@/router'
import clsx from 'clsx';
import { useRoute } from 'vue-router';
const route = useRoute()

console.log('route', route);


</script>

<template>
  <PageWrap class="flex flex-col bg-inner-page bg-cover bg-no-repeat bg-center">
    <header class="flex justify-start bg-adx-base h-14 px-6">
      <h1 class="text-white text-2xl font-semibold mr-10 flex items-center">ADX系统</h1>
      <nav class="flex h-full pt-3">
        <RouterLink
          v-for="[key, { routerName, cnName }] in Object.entries(routerMapFlat).filter(
            ([key]) => key !== ERouterName.Login,
          )"
          :key="key"
          :to="routerName"
          :class="clsx('w-24 flex items-center justify-center text-white text-sm hover:text-adx-base hover:bg-[#F0F3F7] rounded-tl-xl rounded-tr-xl', {
            'text-adx-base bg-[#F0F3F7]': route.name === key
          })"
          >{{ cnName }}</RouterLink
        >
      </nav>
      <UserInfo className="ml-auto mr-0" />
    </header>
    <RouterView />
  </PageWrap>
</template>

<style scoped></style>
