<script setup lang="ts">
import clsx from 'clsx'
import { nextTick, onMounted, reactive, ref, watch, watchEffect } from 'vue'
import type { ElTable } from "element-plus"
import type { TPageInfo, TTableOptionsItem } from '@/type';

const { className, tableOptions, tableData } = defineProps<{
  className?: string
  tableOptions: TTableOptionsItem[]
  tableData: Record<string, string | number | boolean>[]
}>()

/* const initData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2017-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2018-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2019-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2017-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2018-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2019-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2017-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2018-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2019-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2017-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2018-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2019-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2017-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2018-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2019-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
] */

// const tableData = reactive([...initData])
const pageInfo = reactive<TPageInfo>({
  currentPage: 1,
  pageSize: 50,
  total: 0,
  disabled: false,
})
const tableHeight = ref('auto')
const tableRef = ref<InstanceType<typeof ElTable>>()
const tableWrapRef = ref<HTMLDivElement>()

const fixTableHeight = async (h: number = 0, retry: number = 2) => {
  await nextTick()
  const height = tableRef.value?.height
  if (tableWrapRef.value && tableWrapRef.value?.clientHeight > 40) {
    console.log(tableWrapRef.value.clientHeight, h, height, retry);
    if (height === 'auto' && tableWrapRef.value.clientHeight === h) {
      if (retry > 1) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        fixTableHeight(tableWrapRef.value?.clientHeight, retry - 1)
      } else {
        tableHeight.value = `${tableWrapRef.value?.clientHeight}px`
      }
      return
    }
  }
  fixTableHeight(tableWrapRef.value?.clientHeight)
}

/* watch(() => tableData, (newValue, oldValue) => {
  fixTableHeight()
}) */

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}

const handleCurrentChange = async (val: number) => {
  console.log(`current page: ${val}`)
  /* if (val == 6) {
    tableData.length = 0
    tableData.push({
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    })
  } else {
    if (tableData.length !== initData.length) {
      tableData.length = 0
      tableData.push(...initData)
    }
  }
  tableHeight.value = 'auto'
  fixTableHeight() */
}

onMounted(async () => {
  fixTableHeight()
})

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
        ref="tableRef"
        :data="tableData"
        :height="tableHeight"
        max-height="100%"
        class="w-full"
        stripe
        header-cell-class-name="!bg-[#F5F5FC] !text-font-c1 !font-medium"
        cell-class-name="!text-font-c1"
      >
        <el-table-column v-for="_ in tableOptions" :key="_.key" :prop="_.key" :label="_.label"/>
        <slot name="tableAction"/>
      </el-table>
    </div>
    <el-pagination
      class="w-fit ml-auto mr-0 mt-6 pagination-wrap"
      :current-page="pageInfo.currentPage"
      :page-size="pageInfo.pageSize"
      :page-sizes="[50, 100, 200, 300, 400]"
      :disabled="pageInfo.disabled"
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
</style>
