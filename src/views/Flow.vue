<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { TQueryFormMap, TTableOptionsItem, TFlowTableItem, TGetFlowListProps, TDrawerType, TEmptyPromiseFn } from '@/type'
import { getFlowList } from '@/http/api';
import FlowDrawer from '@/components/Drawer/FlowDrawer.vue'

const drawerRef = ref<InstanceType<typeof FlowDrawer>>()
const queryComRef = ref()
const tableComRef = ref()
const tableLoading = ref<boolean>(false)
const tableData = reactive<TFlowTableItem[]>([])
const tableOptions = reactive<TTableOptionsItem[]>([{
  key: 'name',
  label: '流量包名称',
}, {
  key: 'pid',
  label: 'Pid',
}, {
  key: 'tagId',
  label: '广告位id',
}, {
  key: 'mediaId',
  label: '媒体id',
}, {
  key: 'templateId',
  label: '模板id',
}, {
  key: 'width',
  label: '图片宽',
}, {
  key: 'height',
  label: '图片高',
}, {
  key: 'appBundle',
  label: '包名',
}, {
  key: 'appName',
  label: 'app名称',
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

const searchHandle: TEmptyPromiseFn = async () => getTableData()

const getTableData = async () => {
  if (!queryComRef.value || !tableComRef.value) return;

  try {
    const {
      currentPage,
      pageSize,
    } = tableComRef.value.pageInfo
    const params: TGetFlowListProps = {
      ...queryComRef.value.queryForm,
      page: currentPage - 1,
      size: pageSize
    }
    tableLoading.value = true
    const { data: { content, totalElements } } = await getFlowList(params)
    if (content) {
      tableData.length = 0
      tableData.push(...content as TFlowTableItem[])
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
  type
}: {
  id?: number
  type: TDrawerType
}) => {
  drawerType.value = type
  const params: {
    id?: number
    type: TDrawerType
  } = {
    type: drawerType.value
  }
  switch (type) {
    case 'edit':
      params.id = id
      drawerTitle.value = '编辑流量包'
      break
    case 'copy':
      params.id = id
      drawerTitle.value = '复制流量包'
      break
    case 'new':
      drawerTitle.value = '新建流量包'
      break
    default:
      break
  }
  drawerRef.value?.openDrawer(params)
}

const drawerConfirmCb = async () => {
  await getTableData()
}

onMounted(() => getTableData())

</script>

<template>
  <SubPageWrap>
    <QueryCom :loading="tableLoading" ref="queryComRef" :queryFormMap="queryFormMap" :searchHandle="searchHandle">
      <!-- <QueryCom formActionClassName="basis-full"> -->
      <template #extraAction>
        <el-button :loading="tableLoading" type="primary" @click="openDrawer({
          type: 'new'
        })">新建流量包</el-button>
      </template>
    </QueryCom>
    <TableCom :loading="tableLoading" ref="tableComRef" :tableData="tableData" :tableOptions="tableOptions" :searchHandle="searchHandle">
      <template #tableAction>
        <el-table-column fixed="right" label="操作">
          <template #default="scope">
            <el-button link type="primary" size="large" @click="openDrawer({
              id: scope.row.id,
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
    <FlowDrawer ref="drawerRef" :title="drawerTitle" :drawerConfirmCb="drawerConfirmCb" />
  </SubPageWrap>
</template>

<style scoped></style>
