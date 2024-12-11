<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { TQueryFormMap, TTableOptionsItem, TBlockingToolsTableItem, TGetBlockingToolsListProps, TDrawerType, TEmptyPromiseFn } from '@/type'
import { getBlockingToolsList } from '@/http/api';
import BlockingToolsDrawer from '@/components/Drawer/BlockingToolsDrawer.vue'

const drawerRef = ref<InstanceType<typeof BlockingToolsDrawer>>()
const queryComRef = ref()
const tableComRef = ref()
const tableLoading = ref<boolean>(false)
const tableData = reactive<TBlockingToolsTableItem[]>([])
const tableOptions = reactive<TTableOptionsItem[]>([{
  key: 'dsp',
  label: 'dsp',
}, {
  key: 'supplier',
  label: '供应商',
}, {
  key: 'tagId',
  label: '广告位',
}, {
  key: 'imageUrl',
  label: '图片地址',
}, {
  key: 'videoUrl',
  label: '视频地址',
}, {
  key: 'landingPage',
  label: '落地页',
}, {
  key: 'deeplink',
  label: 'deeplink',
}, {
  key: 'text',
  label: '标题和文案',
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
    const params: TGetBlockingToolsListProps = {
      ...queryComRef.value.queryForm,
      page: currentPage - 1,
      size: pageSize
    }
    tableLoading.value = true
    const { data: { content, totalElements } } = await getBlockingToolsList(params)
    if (content) {
      tableData.length = 0
      tableData.push(...content as TBlockingToolsTableItem[])
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
      drawerTitle.value = '编辑屏蔽工具'
      break
    case 'copy':
      params.id = id
      drawerTitle.value = '复制屏蔽工具'
      break
    case 'new':
      drawerTitle.value = '新建屏蔽工具'
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
        })">新建屏蔽工具</el-button>
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
            <!-- <el-button link type="primary" size="small" @click="openDrawer({
              id: scope.row.id,
              type: 'copy'
            })">复制</el-button> -->
          </template>
        </el-table-column>
      </template>
    </TableCom>
    <BlockingToolsDrawer ref="drawerRef" :title="drawerTitle" :drawerConfirmCb="drawerConfirmCb" />
  </SubPageWrap>
</template>

<style scoped></style>
