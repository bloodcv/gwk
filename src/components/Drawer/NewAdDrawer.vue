<script setup lang="ts">
import DrawerWrap from '@/components/Drawer/DrawerWrap.vue'
import { nextTick, reactive, ref } from 'vue'
import CardInDrawer from '@/components/Drawer/CardInDrawer.vue'
import type { FormInstance } from 'element-plus'
import type { TDrawerType, TNewAdDrawerForm, TEmptyPromiseFn } from '@/type'
import { getNewAdById, saveNewAd } from '@/http/api'
import { useDictStore } from '@/stores/dict'

const { title, drawerConfirmCb } = defineProps<{
  title?: string
  drawerConfirmCb?: TEmptyPromiseFn
}>()
const drawerFormInitData: TNewAdDrawerForm = {
  bidType: '',
  ctr: undefined,
  dailyRequest: undefined,
  ecpm: undefined,
  id: undefined,
  maxImpTrackingCount: undefined,
  maxProcessTime: undefined,
  mediaAdSlotId: undefined,
  mediaId: undefined,
  name: '',
  openType: '',
  pdPrice: undefined,
  requirements: '',
  slotType: '',
  templateId: undefined,
  terminal: undefined,
}
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
}

const drawerConfirm = async () => {
  try {
    subLoading.value = true
    await drawerFormRef.value?.validate(async (valid) => {
      if (valid) {
        const { data } = await saveNewAd(drawerForm)
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
              <!-- <el-option
                v-for="_ in dictStore.supplierList"
                :key="_.id"
                :label="_.supplier.name"
                :value="_.supplier.supplier"
              /> -->
            </el-select>
          </el-form-item>
          <el-form-item label="广告位名称" prop="name">
            <el-input placeholder="请输入" v-model.trim="drawerForm.name" />
          </el-form-item>
          <el-form-item label="媒体广告位ID" prop="mediaAdSlotId">
            <el-input placeholder="请输入" v-model="drawerForm.mediaAdSlotId" />
          </el-form-item>
          <el-form-item label="终端" prop="terminal">
            <el-select
              v-model="drawerForm.terminal"
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
          <el-form-item label="类型" prop="slotType">
            <el-select
              v-model="drawerForm.slotType"
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
          <el-form-item label="唤端方式" prop="openType">
            <el-select
              v-model="drawerForm.openType"
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
              <!-- <el-option
                v-for="_ in dictStore.supplierList"
                :key="_.id"
                :label="_.supplier.name"
                :value="_.supplier.supplier"
              /> -->
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
            <el-select
              v-model="drawerForm.maxImpTrackingCount"
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
          <el-form-item label="最大返回时间" prop="maxProcessTime">
            <el-input placeholder="请输入" v-model.trim="drawerForm.maxProcessTime" />
          </el-form-item>
          <el-form-item label="日均请求" prop="dailyRequest">
            <el-input-number placeholder="请输入" v-model="drawerForm.dailyRequest" class="!w-full">
              <template #suffix>
                <span>万</span>
              </template>
            </el-input-number>
          </el-form-item>
          <el-form-item label="ECPM" prop="ecpm">
            <el-input placeholder="请输入" v-model.trim="drawerForm.ecpm" />
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
