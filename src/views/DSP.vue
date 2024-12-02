<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { FTSearchHandle, TQueryFormMap, TTableOptionsItem, TDspTableItem, TGetDspListProps } from '@/type'
import { getDspList } from '@/http/api';

const queryComRef = ref()
const tableComRef = ref()
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

const searchHandle: FTSearchHandle = async () => {
  getDspTableData()
}

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
    console.log('params', params)

    const { data: { content, totalElements }  } = await getDspList(params)
    if (content) {
      tableData.length = 0
      tableData.push(...content as TDspTableItem[])
      tableComRef.value.changePageInfo({
        total: totalElements || 0
      })
    }
  } catch (error) {
    console.error(error)
    throw new Error('Get Dsp List Error')
  }
}

onMounted(() => {
  getDspTableData()
})

</script>

<template>
  <SubPageWrap>
    <QueryCom ref="queryComRef" :queryFormMap="queryFormMap" :searchHandle="searchHandle">
      <!-- <QueryCom formActionClassName="basis-full"> -->
      <template #extraAction>
        <el-button type="primary">新建DSP</el-button>
      </template>
    </QueryCom>
    <TableCom ref="tableComRef" :tableData="tableData" :tableOptions="tableOptions">
      <template #tableAction>
        <el-table-column fixed="right" label="操作">
          <el-button link type="primary" size="large">编辑</el-button>
          <el-button link type="primary" size="small">复制</el-button>
        </el-table-column>
      </template>
    </TableCom>
  </SubPageWrap>
</template>

<style scoped></style>
