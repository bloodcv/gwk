<script setup lang="ts">
import clsx from 'clsx'
import { nextTick, reactive, ref, watch } from 'vue'
import type { ElTable } from "element-plus"
import type { TEmptyPromiseFn, TPageInfo, TTableOptionsItem } from '@/type';

const { className, loading, tableOptions, tableData, searchHandle } = defineProps<{
  loading?: boolean
  className?: string
  tableOptions: TTableOptionsItem[]
  tableData: Record<string, string | number | boolean>[]
  searchHandle: TEmptyPromiseFn
}>()

const defaultPageInfo: TPageInfo = {
  currentPage: 1,
  pageSize: 100,
  total: 0,
  disabled: false,
}

const pageInfo = reactive<TPageInfo>({
  ...defaultPageInfo
})
const tableHeight = ref('auto')
const tableWrapRef = ref<HTMLDivElement>()

const fixTableHeight = async (retry: number = 2) => {
  await nextTick()
  const height = tableHeight.value
  if (tableWrapRef.value && tableWrapRef.value?.clientHeight > 40) {
    if (height === 'auto') {
      if (retry > 1) {
        await new Promise((resolve) => setTimeout(resolve, 500))
        fixTableHeight(retry - 1)
      } else {
        tableHeight.value = `${tableWrapRef.value?.clientHeight}px`
      }
      return
    }
  } else {
    fixTableHeight()
  }
}

watch(() => tableData, async () => {
  tableHeight.value = 'auto'
  fixTableHeight()
}, {
  deep: true,
  immediate: true,
})

const handleSizeChange = (val: number) => {
  pageInfo.currentPage = defaultPageInfo.currentPage
  pageInfo.pageSize = val
  searchHandle?.()
}

const handleCurrentChange = async (val: number) => {
  pageInfo.currentPage = val
  searchHandle?.()
}

defineExpose({
  pageInfo,
  changePageInfo: (params: TPageInfo) => {
    Object.assign(pageInfo, params)
  },
})
</script>

<template>
  <div :class="clsx('flex flex-col flex-1 overflow-hidden', className)">
    <div class="flex-1 overflow-hidden" ref="tableWrapRef">
      <el-table
        v-loading="loading"
        :data="tableData"
        :height="tableHeight"
        max-height="100%"
        class="w-full"
        stripe
        header-cell-class-name="!bg-[#F5F5FC] !text-font-c1 !font-medium"
        cell-class-name="!text-font-c1"
      >
        <template v-for="_ in tableOptions" :key="_.key" :prop="_.key" :label="_.label">
          <el-table-column v-if="!_.slot" :prop="_.key" :label="_.label" />
          <slot v-else :name="_.slot" />
        </template>
        <slot name="tableAction" />
      </el-table>
    </div>
    <el-pagination
      class="w-fit ml-auto mr-0 mt-6 pagination-wrap"
      :current-page="pageInfo.currentPage"
      :page-size="pageInfo.pageSize"
      :page-sizes="[100, 200, 300, 400]"
      :disabled="loading"
      background
      layout="total, prev, pager, next, sizes, jumper"
      :total="pageInfo.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style lang="scss" scoped>
.pagination-wrap {
  :deep(.el-pagination__total) {
    color: #848C96;
    font-size: 14px;
  }
  :deep(.btn-prev), :deep(.btn-next), :deep(.el-pager li) {
    @apply bg-transparent border border-solid border-[#C9CDD4] rounded-[4px];
  }
  :deep(.el-pager li.more) {
    @apply border-none;
  }
}

:deep(.el-switch) {
  --el-switch-on-color: #13ce66;
  --el-switch-off-color: #ff4949;
}
</style>
