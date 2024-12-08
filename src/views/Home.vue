<script setup lang="ts">
import { ERouterName, routerMapFlat } from '@/router'
import { useDictStore } from '@/stores/dict';
import clsx from 'clsx'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const dictStore = useDictStore()

const initDictData = async () => {
  try {
    dictStore.dictLoading = true
    Promise.allSettled([
      dictStore.updateSupplierList(),
      dictStore.updateMediaIdList(),
      dictStore.updateLists(),
    ])
  } catch (error) {
    console.error('initDictData error:', error)
  } finally {
    dictStore.dictLoading = false
  }
}

onMounted(async () => {
  console.log(import.meta.env.MODE)
  await initDictData()
})
</script>

<template>
  <PageWrap class="flex flex-col bg-inner-page bg-cover bg-no-repeat bg-center">
    <!-- <el-scrollbar wrap-class="" view-class="h-full overflow-y-hidden overflow-x-auto"> -->
      <el-scrollbar view-class="h-full">
      <div class="min-w-[1366px] h-full overflow-y-hidden flex flex-col">
        <header class="flex justify-start bg-adx-base h-14 px-6">
          <h1 class="text-white text-2xl font-semibold mr-10 flex items-center">ADX系统</h1>
          <el-scrollbar view-class="h-full">
            <nav class="flex h-full pt-3 max-w-[66rem]">
              <RouterLink
                v-for="[key, { routerName, cnName }] in Object.entries(routerMapFlat).filter(
                  ([key]) => key !== ERouterName.Login,
                )"
                :key="key"
                :to="routerName"
                :class="
                  clsx(
                    'w-24 shrink-0 flex items-center justify-center text-white text-sm hover:text-adx-base hover:bg-[#F0F3F7] rounded-tl-xl rounded-tr-xl',
                    {
                      '!text-adx-base bg-[#F0F3F7]': route.name === key,
                    },
                  )
                "
                >{{ cnName }}</RouterLink
              >
            </nav>
          </el-scrollbar>
          <UserInfo className="ml-auto mr-0" />
        </header>
        <RouterView />
      </div>
    </el-scrollbar>
  </PageWrap>
</template>

<style lang="scss" scoped>
:deep(.el-drawer__header),
:deep(.el-drawer__body),
:deep(.el-drawer__footer) {
  @apply m-0 p-0
}
</style>
