<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { FTSearchHandle, TQueryFormMap, TTableOptionsItem, TDspTableItem, TGetDspListProps, TDrawerType, TEmptyPromiseFn } from '@/type'
import { getDspList } from '@/http/api';
import DspDrawer from '@/components/Drawer/DspDrawer.vue'

const drawerRef = ref<InstanceType<typeof DspDrawer>>()
const queryComRef = ref()
const tableComRef = ref()
const tableLoading = ref<boolean>(false)
const tableData = reactive<TDspTableItem[]>([])
const tableOptions = reactive<TTableOptionsItem[]>([{
  key: 'id',
  label: 'dspID',
}, {
  key: 'name',
  label: 'dsp名称',
}, {
  key: 'requestUrl',
  label: '请求地址',
}, {
  key: 'maxQps',
  label: 'QPS上限',
}, {
  key: 'bidFloor',
  label: '默认底价',
}, {
  key: 'bidFloorRatio',
  label: '默认底价系数',
},
/* {
  key: 'action',
  label: '默认媒体返回出价',
}, {
  key: 'action',
  label: '默认媒体返回出价系数',
},  */
{
  key: 'winPriceRatio',
  label: '默认成交系数',
}, {
  key: 'winPriceRatioRange',
  label: '默认浮动系数',
}, {
  key: 'profitRate',
  label: '默认利润率',
}])
const queryFormMap = reactive<TQueryFormMap>({
  search: {
    key: 'search',
    label: '搜索',
    placeholder: '模糊搜索（多空格搜索）',
    type: 'input',
    value: '',
  },
})
const drawerTitle = ref<string>('')
const drawerType = ref<TDrawerType>('new')

const searchHandle: TEmptyPromiseFn = async () => getDspTableData()

const getDspTableData = async () => {
  if (!queryComRef.value || !tableComRef.value) return;

  try {
    const {
      currentPage,
      pageSize,
    } = tableComRef.value.pageInfo
    const params: TGetDspListProps = {
      ...queryComRef.value.queryForm,
      page: currentPage - 1,
      size: pageSize
    }
    tableLoading.value = true
    const { data: { content, totalElements } } = await getDspList(params)
    if (content) {
      tableData.length = 0
      tableData.push(...content as TDspTableItem[])
      tableComRef.value.changePageInfo({
        total: totalElements || 0
      })
    }
  } catch (error) {
    console.error(error)
  } finally {
    tableLoading.value = false
  }
}

const openDrawer = ({
  id,
  dsp,
  type
}: {
  id?: number
  dsp?: string
  type: TDrawerType
}) => {
  drawerType.value = type
  const params: {
    id?: number
    dsp?: string
    type: TDrawerType
  } = {
    type: drawerType.value
  }
  switch (type) {
    case 'edit':
      params.id = id
      params.dsp = dsp
      drawerTitle.value = '编辑DSP'
      break
    case 'copy':
      params.id = id
      drawerTitle.value = '复制DSP'
      break
    case 'new':
      drawerTitle.value = '新建DSP'
      break
    default:
      break
  }
  drawerRef.value?.openDrawer(params)
}

const drawerConfirmCb = async () => {
  await getDspTableData()
}

onMounted(() => getDspTableData())

</script>

<template>
  <SubPageWrap>
    <QueryCom :loading="tableLoading" ref="queryComRef" :queryFormMap="queryFormMap" :searchHandle="searchHandle">
      <!-- <QueryCom formActionClassName="basis-full"> -->
      <template #extraAction>
        <el-button :loading="tableLoading" type="primary" @click="openDrawer({
          type: 'new'
        })">新建DSP</el-button>
      </template>
    </QueryCom>
    <TableCom :loading="tableLoading" ref="tableComRef" :tableData="tableData" :tableOptions="tableOptions" :searchHandle="searchHandle">
      <template #tableAction>
        <el-table-column fixed="right" label="操作">
          <template #default="scope">
            <el-button link type="primary" size="large" @click="openDrawer({
              id: scope.row.id,
              dsp: scope.row.dsp,
              type: 'edit'
            })">编辑</el-button>
            <el-button link type="primary" size="small" @click="openDrawer({
              id: scope.row.id,
              type: 'copy'
            })">复制</el-button>
          </template>
        </el-table-column>
      </template>
    </TableCom>
    <DspDrawer ref="drawerRef" :title="drawerTitle" :drawerConfirmCb="drawerConfirmCb" />
  </SubPageWrap>
</template>

<style scoped></style>
