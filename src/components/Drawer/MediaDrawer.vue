<script setup lang="ts">
import DrawerWrap from '@/components/Drawer/DrawerWrap.vue'
import { nextTick, reactive, ref } from 'vue'
import CardInDrawer from '@/components/Drawer/CardInDrawer.vue'
import type { FormInstance } from 'element-plus'
import type { TDrawerType, TMediaDrawerForm, TEmptyPromiseFn } from '@/type'
import { getMediaById, saveMedia } from '@/http/api'
import { useDictStore } from '@/stores/dict'

const { title, drawerConfirmCb } = defineProps<{
  title?: string
  drawerConfirmCb?: TEmptyPromiseFn
}>()
const drawerFormInitData: TMediaDrawerForm = {
  id: undefined,
  name: '',
  mediaType: '',
  supplier: '',
}
const formLoading = ref<boolean>(false)
const subLoading = ref<boolean>(false)
const drawerRef = ref<InstanceType<typeof DrawerWrap>>()
const drawerFormRef = ref<FormInstance>()
const drawerForm = reactive<TMediaDrawerForm>({
  ...drawerFormInitData,
})
const dictStore = useDictStore()

const openDrawer = async ({ id, type }: { id?: number; type: TDrawerType }) => {
  if (id && (type === 'copy' || type === 'edit')) {
    try {
      formLoading.value = true
      const { data } = await getMediaById({ id })
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
        const { data } = await saveMedia(drawerForm)
        if (data?.id) {
          subLoading.value = false
          await nextTick()
          drawerRef.value?.closeDrawer()
          drawerConfirmCb?.()
        }
      } else {
        throw new Error('saveMedia Error')
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
          <el-form-item label="供应商" prop="supplier">
            <el-select
              v-model="drawerForm.supplier"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option
                v-for="_ in dictStore.supplierList"
                :key="_.id"
                :label="_.supplier.name"
                :value="_.supplier.supplier"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="媒体名称" prop="name">
            <el-input placeholder="请输入" v-model.trim="drawerForm.name" />
          </el-form-item>
          <el-form-item label="媒体类型" prop="mediaType"> </el-form-item>
        </el-form>
      </CardInDrawer>
    </template>
  </DrawerWrap>
</template>

<style scoped></style>
