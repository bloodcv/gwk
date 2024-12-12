<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type {
  TQueryFormMap,
  TTableOptionsItem,
  TDeliveryPlansTableItem,
  TGetDeliveryPlansListProps,
  TDrawerType,
  TEmptyPromiseFn,
} from '@/type'
import { getDeliveryPlansList } from '@/http/api'
import DeliveryPlansDrawer from '@/components/Drawer/DeliveryPlansDrawer.vue'
import type { UploadInstance} from 'element-plus'

const upload = ref<UploadInstance>()
const drawerRef = ref<InstanceType<typeof DeliveryPlansDrawer>>()
const queryComRef = ref()
const tableComRef = ref()
const tableLoading = ref<boolean>(false)
const tableData = reactive<TDeliveryPlansTableItem[]>([])
const tableOptions = reactive<TTableOptionsItem[]>([
  {
    key: 'active',
    label: '状态',
    slot: 'active',
  },
  {
    key: 'id',
    label: '计划id',
  },
  {
    key: 'name',
    label: '计划名称',
  },
  {
    key: 'dsp',
    label: 'DSP',
  },
  {
    key: 'settleDspBidType',
    label: 'DSP结算类型',
  },
  {
    key: 'flowPackageId',
    label: '流量包',
  },
  {
    key: 'media',
    label: '媒体名称',
  },
  {
    key: 'slotId',
    label: '广告位名称',
  },
])
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
  if (!queryComRef.value || !tableComRef.value) return

  try {
    const { currentPage, pageSize } = tableComRef.value.pageInfo
    const params: TGetDeliveryPlansListProps = {
      ...queryComRef.value.queryForm,
      page: currentPage - 1,
      size: pageSize,
    }
    tableLoading.value = true
    const {
      data: { content, totalElements },
    } = await getDeliveryPlansList(params)
    if (content) {
      tableData.length = 0
      tableData.push(...(content as TDeliveryPlansTableItem[]))
      tableComRef.value.changePageInfo({
        total: totalElements || 0,
      })
    }
  } catch (error) {
    console.error(error)
  } finally {
    tableLoading.value = false
  }
}

const openDrawer = ({ id, type }: { id?: number; type: TDrawerType }) => {
  drawerType.value = type
  const params: {
    id?: number
    type: TDrawerType
  } = {
    type: drawerType.value,
  }
  switch (type) {
    case 'edit':
      params.id = id
      drawerTitle.value = '编辑计划'
      break
    case 'copy':
      params.id = id
      drawerTitle.value = '复制计划'
      break
    case 'new':
      drawerTitle.value = '新建计划'
      break
    default:
      break
  }
  drawerRef.value?.openDrawer(params)
}

const drawerConfirmCb = async () => {
  await getTableData()
}

const beforeActiveChange = (idx: number) => {
  tableData[idx].activeLoading = true
  return new Promise((resolve) => {
    setTimeout(() => {
      tableData[idx].activeLoading = false
      return resolve(true)
    }, 3000)
  })
}

const deleteItem = (id: number) => {
  console.log('deleteItem id:', id)
  getTableData()
}


const downLoadFile = () => {
  console.log('downLoadFile')
}

onMounted(() => getTableData())
</script>

<template>
  <SubPageWrap>
    <QueryCom
      :loading="tableLoading"
      ref="queryComRef"
      :queryFormMap="queryFormMap"
      :searchHandle="searchHandle"
    >
      <!-- <QueryCom formActionClassName="basis-full"> -->
      <template #extraAction>
        <el-upload
          ref="upload"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :limit="1"
          :auto-upload="true"
        >
          <el-button :loading="tableLoading">导入</el-button>
        </el-upload>
        <el-button :loading="tableLoading" @click="downLoadFile">导出</el-button>
        <el-button
          class="!ml-0"
          :loading="tableLoading"
          type="primary"
          @click="
            openDrawer({
              type: 'new',
            })
          "
          >新建计划</el-button
        >
      </template>
    </QueryCom>
    <TableCom
      :loading="tableLoading"
      ref="tableComRef"
      :tableData="tableData"
      :tableOptions="tableOptions"
      :searchHandle="searchHandle"
    >
      <template #active>
        <el-table-column label="状态">
          <template #default="scope">
            <el-switch
              v-model="tableData[scope.$index].active"
              :loading="!!tableData[scope.$index].activeLoading"
              :before-change="() => beforeActiveChange(scope.$index)"
            />
          </template>
        </el-table-column>
      </template>
      <template #tableAction>
        <el-table-column fixed="right" label="操作" width="200">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="large"
              @click="
                openDrawer({
                  id: scope.row.id,
                  type: 'edit',
                })
              "
              >编辑</el-button
            >
            <el-button
              link
              type="primary"
              size="large"
              @click="
                openDrawer({
                  id: scope.row.id,
                  type: 'copy',
                })
              "
              >复制</el-button
            >
            <el-button link type="danger" size="large" @click="deleteItem(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </template>
    </TableCom>
    <DeliveryPlansDrawer ref="drawerRef" :title="drawerTitle" :drawerConfirmCb="drawerConfirmCb" />
  </SubPageWrap>
</template>

<style scoped></style>
