<script setup lang="ts">
import DrawerWrap from '@/components/Drawer/DrawerWrap.vue'
import { reactive, ref } from 'vue'
import CardInDrawer from '@/components/Drawer/CardInDrawer.vue'
import type { FormInstance } from 'element-plus'
import type { TDrawerType, TDspTableItem } from '@/type';

type TFormData = Partial<Omit<TDspTableItem, 'dsp'>>

const { title } = defineProps<{
  title?: string
  id?: number
  type: TDrawerType
}>()

const formLoading = ref<boolean>(false)
const subLoading = ref<boolean>(false)
const drawerRef = ref<InstanceType<typeof DrawerWrap>>()
const drawerFormRef = ref<FormInstance>()
const drawerForm = reactive<TFormData>({
  id: undefined,
  bidFloor: undefined,
  bidFloorRatio: undefined,
  maxQps: undefined,
  name: '',
  profitRate: undefined,
  requestUrl: '',
  winPriceRatio: undefined,
  winPriceRatioRange: undefined,
})

const openDrawer = () => {
  drawerRef.value?.openDrawer()
}

/* const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
} */

defineExpose({
  openDrawer,
})
</script>

<template>
  <DrawerWrap ref="drawerRef" :title="title" :subLoading="subLoading">
    <template #drawerContent>
      <CardInDrawer>
        <el-form
          v-loading="formLoading"
          ref="drawerFormRef"
          :model="drawerForm"
          label-width="120"
          label-position="left"
        >
          <el-form-item label="dsp名称" prop="name">
            <el-input placeholder="请输入" v-model="drawerForm.name" />
          </el-form-item>
          <el-form-item label="请求地址" prop="requestUrl">
            <el-input placeholder="请输入" v-model="drawerForm.requestUrl" />
          </el-form-item>
          <el-form-item label="QPS上限" prop="maxQps">
            <el-input placeholder="请输入" v-model="drawerForm.maxQps" />
          </el-form-item>
          <el-form-item label="默认底价" prop="bidFloor">
            <el-input placeholder="请输入" v-model="drawerForm.bidFloor" />
          </el-form-item>
          <el-form-item label="默认底价系数" prop="bidFloorRatio">
            <el-input placeholder="请输入" v-model="drawerForm.bidFloorRatio" />
          </el-form-item>
          <el-form-item label="默认成交系数" prop="winPriceRatio">
            <el-input placeholder="请输入" v-model="drawerForm.winPriceRatio" />
          </el-form-item>
          <el-form-item label="默认浮动系数" prop="winPriceRatioRange">
            <el-input placeholder="请输入" v-model="drawerForm.winPriceRatioRange" />
          </el-form-item>
          <el-form-item label="默认利润率" prop="profitRate">
            <el-input placeholder="请输入" v-model="drawerForm.profitRate" />
          </el-form-item>
          <!-- <el-form-item>
            <el-button type="primary" @click="submitForm(drawerFormRef)"> Create </el-button>
            <el-button @click="resetForm(drawerFormRef)">Reset</el-button>
          </el-form-item> -->
        </el-form>
      </CardInDrawer>
    </template>
  </DrawerWrap>
</template>

<style scoped></style>
