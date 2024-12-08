<script setup lang="ts">
import DrawerWrap from '@/components/Drawer/DrawerWrap.vue'
import { nextTick, reactive, ref, watch } from 'vue'
import CardInDrawer from '@/components/Drawer/CardInDrawer.vue'
import type { FormInstance } from 'element-plus'
import type { TDrawerType, TNewAdDrawerForm, TEmptyPromiseFn } from '@/type'
import { getNewAdById, saveNewAd } from '@/http/api'
import { useDictStore } from '@/stores/dict'
import { OPEN_TYPE_SPLIT } from '@/util'

const { title, drawerConfirmCb } = defineProps<{
  title?: string
  drawerConfirmCb?: TEmptyPromiseFn
}>()
const drawerFormInitData: TNewAdDrawerForm = {
  bidType: '',
  ctr: 0,
  dailyRequest: 0,
  ecpm: 0,
  id: undefined,
  maxImpTrackingCount: 0,
  maxProcessTime: 0,
  mediaAdSlotId: 0,
  mediaId: undefined,
  name: '',
  openType: '',
  openTypeSec: [],
  pdPrice: 0,
  requirements: '',
  slotType: '',
  templateId: undefined,
  terminal: 0,
}

const openTypeCheckAll = ref(false)
const openTypeIndeterminate = ref(false)
const formLoading = ref<boolean>(false)
const subLoading = ref<boolean>(false)
const drawerRef = ref<InstanceType<typeof DrawerWrap>>()
const drawerFormRef = ref<FormInstance>()
const drawerForm = reactive<TNewAdDrawerForm>({
  ...drawerFormInitData,
})
const dictStore = useDictStore()

const openDrawer = async ({ id, type }: { id?: number; type: TDrawerType }) => {
  if (id && (type === 'copy' || type === 'edit')) {
    try {
      formLoading.value = true
      const { data } = await getNewAdById({ id })
      Object.assign(drawerForm, data)
      drawerForm.openTypeSec.length = 0
      drawerForm.openTypeSec.push(...data.openType.split(OPEN_TYPE_SPLIT))
      if (type === 'copy') {
        drawerForm.id = undefined
      }
    } catch (error) {
      console.error(error)
    } finally {
      formLoading.value = false
    }
  }
  drawerRef.value?.openDrawer()
}

const afterCloseCb = () => {
  Object.assign(drawerForm, drawerFormInitData)
  drawerForm.openTypeSec.length = 0
}

const drawerConfirm = async () => {
  try {
    subLoading.value = true
    await drawerFormRef.value?.validate(async (valid) => {
      if (valid) {
        const subData = { ...drawerForm, openType: drawerForm.openTypeSec.join(OPEN_TYPE_SPLIT) } as Omit<TNewAdDrawerForm, 'openTypeSec'> & { openTypeSec?: string[] }
        delete subData.openTypeSec
        const { data } = await saveNewAd(subData)
        if (data?.id) {
          subLoading.value = false
          await nextTick()
          drawerRef.value?.closeDrawer()
          drawerConfirmCb?.()
        }
      } else {
        throw new Error('saveNewAd Error')
      }
    })
  } catch (error) {
    console.error(error)
  } finally {
    subLoading.value = false
  }
}


watch(() => drawerForm.openTypeSec, (val) => {
  if (val.length === 0) {
    openTypeCheckAll.value = false
    openTypeIndeterminate.value = false
  } else if (val.length === dictStore.OpenTypeList.length) {
    openTypeCheckAll.value = true
    openTypeIndeterminate.value = false
  } else {
    openTypeIndeterminate.value = true
  }
}, {
  deep: true,
})

const handleOpenTypeCheckAll = (val: string) => {
  openTypeIndeterminate.value = false
  if (val) {
    drawerForm.openTypeSec.length = 0
    drawerForm.openTypeSec.push(...dictStore.OpenTypeList)
  } else {
    drawerForm.openTypeSec.length = 0
  }
}

defineExpose({
  openDrawer,
})
</script>

<template>
  <DrawerWrap
    ref="drawerRef"
    :title="title"
    :subLoading="subLoading || formLoading"
    :afterCloseCb="afterCloseCb"
    :drawerConfirm="drawerConfirm"
  >
    <template #drawerContent>
      <CardInDrawer>
        <el-form
          v-loading="formLoading"
          ref="drawerFormRef"
          :model="drawerForm"
          label-width="120"
          label-position="left"
        >
          <el-form-item label="媒体" prop="mediaId">
            <el-select
              v-model="drawerForm.mediaId"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option
                v-for="_ in dictStore.MediaIdList"
                :key="_.id"
                :label="_.name"
                :value="_.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="广告位名称" prop="name">
            <el-input placeholder="请输入" v-model.trim="drawerForm.name" />
          </el-form-item>
          <el-form-item label="媒体广告位ID" prop="mediaAdSlotId">
            <el-input-number placeholder="请输入" v-model="drawerForm.mediaAdSlotId" class="!w-full" />
          </el-form-item>
          <el-form-item label="终端" prop="terminal">
            <el-input-number placeholder="请输入" v-model="drawerForm.terminal" class="!w-full" />
          </el-form-item>
          <el-form-item label="类型" prop="slotType">
            <el-select
              v-model="drawerForm.slotType"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option
                v-for="_ in dictStore.SlotTypeList"
                :key="_"
                :label="_"
                :value="_"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="唤端方式" prop="openTypeSec">
            <el-select
              v-model="drawerForm.openTypeSec"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
              multiple
              clearable
              collapse-tags
              :max-collapse-tags="6"
            >
              <template #header>
                <el-checkbox
                  v-model="openTypeCheckAll"
                  :indeterminate="openTypeIndeterminate"
                  @change="handleOpenTypeCheckAll"
                >
                  全选
                </el-checkbox>
              </template>
              <el-option
                v-for="_ in dictStore.OpenTypeList"
                :key="_"
                :label="_"
                :value="_"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="模板" prop="templateId">
            <el-select
              v-model="drawerForm.templateId"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <!-- <el-option
                v-for="_ in dictStore.supplierList"
                :key="_.id"
                :label="_.supplier.name"
                :value="_.supplier.supplier"
              /> -->
            </el-select>
          </el-form-item>
          <el-form-item label="合作模式" prop="bidType">
            <el-select
              v-model="drawerForm.bidType"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option
                v-for="_ in dictStore.BidTypeList"
                :key="_"
                :label="_"
                :value="_"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="PD价格" prop="pdPrice">
            <el-input-number placeholder="请输入" v-model="drawerForm.pdPrice" class="!w-full">
              <template #suffix>
                <span>分</span>
              </template>
            </el-input-number>
          </el-form-item>
          <el-form-item label="最大监测条数" prop="maxImpTrackingCount">
            <el-input-number placeholder="请输入" v-model="drawerForm.maxImpTrackingCount" class="!w-full" />
          </el-form-item>
          <el-form-item label="最大返回时间" prop="maxProcessTime">
            <el-input-number placeholder="请输入" v-model="drawerForm.maxProcessTime" class="!w-full" />
          </el-form-item>
          <el-form-item label="日均请求" prop="dailyRequest">
            <el-input-number placeholder="请输入" v-model="drawerForm.dailyRequest" class="!w-full">
              <template #suffix>
                <span>万</span>
              </template>
            </el-input-number>
          </el-form-item>
          <el-form-item label="ECPM" prop="ecpm">
            <el-input-number placeholder="请输入" v-model="drawerForm.ecpm" class="!w-full" />
          </el-form-item>
          <el-form-item label="CTR" prop="ctr">
            <el-input-number placeholder="请输入" v-model="drawerForm.ctr" class="!w-full">
              <template #suffix>
                <span>%</span>
              </template>
            </el-input-number>
          </el-form-item>
          <el-form-item label="投放要求" prop="requirements">
            <el-input
              placeholder="请输入"
              :rows="5"
              type="textarea"
              v-model.trim="drawerForm.requirements"
            />
          </el-form-item>
        </el-form>
      </CardInDrawer>
    </template>
  </DrawerWrap>
</template>

<style scoped></style>
