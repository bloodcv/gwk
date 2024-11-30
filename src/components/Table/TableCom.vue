<script setup lang="ts">
import clsx from 'clsx'
import { nextTick, onMounted, reactive, ref } from 'vue'
import type { ElTable } from "element-plus"

const { className } = defineProps({
  className: String,
})

const initData = [
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
]

const tableData = reactive([...initData])
const currentPage4 = ref(4)
const pageSize4 = ref(100)
const disabled = ref(false)
const tableHeight = ref('auto')
const tableRef = ref<InstanceType<typeof ElTable>>()

const fixTableHeight = async () => {
  await nextTick()
  const height = tableRef.value?.height
  if (tableWrapRef.value && tableWrapRef.value?.clientHeight > 40) {
    if (height === 'auto') {
      tableHeight.value = `${tableWrapRef.value?.clientHeight}px`
    }
  } else {
    fixTableHeight()
  }
}

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}

const handleCurrentChange = async (val: number) => {
  console.log(`current page: ${val}`)
  if (val == 6) {
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
  fixTableHeight()
}
const tableWrapRef = ref<HTMLDivElement>()

onMounted(() => {
  fixTableHeight()
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
        <el-table-column prop="date" label="Date"/>
        <el-table-column prop="name" label="Name"/>
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
    <el-pagination
      class="w-fit ml-auto mr-0 mt-6 pagination-wrap"
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :disabled="disabled"
      background
      layout="total, prev, pager, next, sizes, jumper"
      :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      popper-class="kkkkk"
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
