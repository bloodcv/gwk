<script setup lang="ts">
import DrawerWrap from '@/components/Drawer/DrawerWrap.vue'
import { nextTick, reactive, ref } from 'vue'
import CardInDrawer from '@/components/Drawer/CardInDrawer.vue'
import type { FormInstance } from 'element-plus'
import type { TDrawerType, TDeliveryPlansDrawerForm, TEmptyPromiseFn } from '@/type';
import { getDeliveryPlansById, saveDeliveryPlans } from '@/http/api';

const { title, drawerConfirmCb } = defineProps<{
  title?: string
  drawerConfirmCb?: TEmptyPromiseFn
}>()
const drawerFormInitData: TDeliveryPlansDrawerForm = {
  dsp: undefined,
  id: undefined,
  bidFloor: undefined,
  bidFloorRatio: undefined,
  maxQps: undefined,
  name: '',
  profitRate: undefined,
  requestUrl: '',
  winPriceRatio: undefined,
  winPriceRatioRange: undefined,
}
const formLoading = ref<boolean>(false)
const subLoading = ref<boolean>(false)
const drawerRef = ref<InstanceType<typeof DrawerWrap>>()
const drawerFormRef = ref<FormInstance>()
const drawerForm = reactive<TDeliveryPlansDrawerForm>({
  ...drawerFormInitData
})

const openDrawer = async ({
  id,
  type,
}: {
  id?: number
  type: TDrawerType
}) => {
  if (id && (type === 'copy' || type === 'edit')) {
    try {
      formLoading.value = true
      const { data } = await getDeliveryPlansById({ id });
      Object.assign(drawerForm, data)
      if (type === 'copy') {
        drawerForm.id = undefined
        drawerForm.dsp = undefined
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
      const { data } = await saveDeliveryPlans(drawerForm)
      if (data?.id) {
        subLoading.value = false
        await nextTick()
        drawerRef.value?.closeDrawer()
        drawerConfirmCb?.()
      }
    } else {
      throw new Error('saveDeliveryPlans Error')
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
  <DrawerWrap ref="drawerRef" :title="title" :subLoading="subLoading || formLoading" :afterCloseCb="afterCloseCb" :drawerConfirm="drawerConfirm">
    <template #drawerContent>
      <CardInDrawer>
        <el-form v-loading="formLoading" ref="drawerFormRef" :model="drawerForm" label-width="120"
          label-position="left">
          <el-form-item label="dsp名称" prop="name">
            <el-input placeholder="请输入" v-model.trim="drawerForm.name" />
          </el-form-item>
          <el-form-item label="请求地址" prop="requestUrl">
            <el-input placeholder="请输入" v-model.trim="drawerForm.requestUrl" />
          </el-form-item>
          <el-form-item label="QPS上限" type="number" prop="maxQps">
            <el-input-number placeholder="请输入" v-model="drawerForm.maxQps" class="!w-full" />
          </el-form-item>
          <el-form-item label="默认底价" type="number" prop="bidFloor">
            <el-input-number placeholder="请输入" v-model="drawerForm.bidFloor" class="!w-full" />
          </el-form-item>
          <el-form-item label="默认底价系数" type="number" prop="bidFloorRatio">
            <el-input-number placeholder="请输入" v-model="drawerForm.bidFloorRatio" class="!w-full" />
          </el-form-item>
          <el-form-item label="默认成交系数" type="number" prop="winPriceRatio">
            <el-input-number placeholder="请输入" v-model="drawerForm.winPriceRatio" class="!w-full" />
          </el-form-item>
          <el-form-item label="默认浮动系数" type="number" prop="winPriceRatioRange">
            <el-input-number placeholder="请输入" v-model="drawerForm.winPriceRatioRange" class="!w-full" />
          </el-form-item>
          <el-form-item label="默认利润率" type="number" prop="profitRate">
            <el-input-number placeholder="请输入" v-model="drawerForm.profitRate" class="!w-full" />
          </el-form-item>
        </el-form>
      </CardInDrawer>
    </template>
  </DrawerWrap>
</template>

<style scoped>
</style>
