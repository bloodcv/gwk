<script setup lang="ts">
import DrawerWrap from '@/components/Drawer/DrawerWrap.vue'
import { nextTick, reactive, ref } from 'vue'
import CardInDrawer from '@/components/Drawer/CardInDrawer.vue'
import type { FormInstance } from 'element-plus'
import type { TDrawerType, TBlockingToolsDrawerForm, TEmptyPromiseFn } from '@/type'
import { getBlockingToolsById, saveBlockingTools } from '@/http/api'
import { useDictStore } from '@/stores/dict'

const { title, drawerConfirmCb } = defineProps<{
  title?: string
  drawerConfirmCb?: TEmptyPromiseFn
}>()
const drawerFormInitData: TBlockingToolsDrawerForm = {
  id: undefined,
  deeplink: '',
  dsp: '',
  imageUrl: '',
  landingPage: '',
  supplier: '',
  tagId: undefined,
  text: '',
  videoUrl: '',
}
const formLoading = ref<boolean>(false)
const subLoading = ref<boolean>(false)
const drawerRef = ref<InstanceType<typeof DrawerWrap>>()
const drawerFormRef = ref<FormInstance>()
const drawerForm = reactive<TBlockingToolsDrawerForm>({
  ...drawerFormInitData,
})
const dictStore = useDictStore()

const openDrawer = async ({ id, type }: { id?: number; type: TDrawerType }) => {
  if (id && (type === 'copy' || type === 'edit')) {
    try {
      formLoading.value = true
      const { data } = await getBlockingToolsById({ id })
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
        const { data } = await saveBlockingTools(drawerForm)
        if (data?.id) {
          subLoading.value = false
          await nextTick()
          drawerRef.value?.closeDrawer()
          drawerConfirmCb?.()
        }
      } else {
        throw new Error('saveBlockingTools Error')
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
      <el-form
        v-loading="formLoading"
        ref="drawerFormRef"
        :model="drawerForm"
        label-width="120"
        label-position="left"
        class="flex flex-col gap-4"
      >
        <CardInDrawer title="屏蔽维度">
          <el-form-item label="DSP" prop="dsp">
            <el-select
              v-model="drawerForm.dsp"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option v-for="_ in dictStore.DspList" :key="_" :label="_" :value="_" />
            </el-select>
          </el-form-item>
          <el-form-item label="供应商" type="number" prop="supplier">
            <el-select v-model="drawerForm.supplier" placeholder="请选择"> </el-select>
          </el-form-item>
          <el-form-item label="广告位" type="number" prop="tagId">
            <el-select
              v-model="drawerForm.tagId"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option v-for="_ in dictStore.adList" :key="_.id" :label="_.name" :value="_.id" />
            </el-select>
          </el-form-item>
        </CardInDrawer>
        <CardInDrawer title="屏蔽指标">
          <el-form-item label="图片地址" prop="imageUrl">
            <el-input placeholder="请输入" v-model.trim="drawerForm.imageUrl" />
          </el-form-item>
          <el-form-item label="视频地址" type="number" prop="videoUrl">
            <el-input placeholder="请输入" v-model.trim="drawerForm.videoUrl" />
          </el-form-item>
          <el-form-item label="落地页" type="number" prop="landingPage">
            <el-input placeholder="请输入" v-model.trim="drawerForm.landingPage" />
          </el-form-item>
          <el-form-item label="deeplink" type="number" prop="deeplink">
            <el-input placeholder="请输入" v-model.trim="drawerForm.deeplink" />
          </el-form-item>
          <el-form-item label="标题和文案" type="number" prop="text">
            <el-input placeholder="请输入" v-model.trim="drawerForm.text" />
          </el-form-item>
        </CardInDrawer>
      </el-form>
    </template>
  </DrawerWrap>
</template>

<style scoped></style>
