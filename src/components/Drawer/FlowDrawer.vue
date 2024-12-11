<script setup lang="ts">
import DrawerWrap from '@/components/Drawer/DrawerWrap.vue'
import { nextTick, reactive, ref } from 'vue'
import CardInDrawer from '@/components/Drawer/CardInDrawer.vue'
import type { FormInstance } from 'element-plus'
import type { TDrawerType, TFlowDrawerForm, TEmptyPromiseFn } from '@/type'
import { getFlowById, saveFlow } from '@/http/api'

const { title, drawerConfirmCb } = defineProps<{
  title?: string
  drawerConfirmCb?: TEmptyPromiseFn
}>()
const drawerFormInitData: TFlowDrawerForm = {
  id: undefined,
  appBundle: '',
  appName: '',
  bidType: '',
  fieldList: ['image_url', 'image_width', 'image_height'],
  height: undefined,
  name: '',
  pid: undefined,
  publisherId: undefined,
  tagId: undefined,
  templateId: undefined,
  width: undefined,
  mediaId: undefined,
}
const formLoading = ref<boolean>(false)
const subLoading = ref<boolean>(false)
const drawerRef = ref<InstanceType<typeof DrawerWrap>>()
const drawerFormRef = ref<FormInstance>()
const drawerForm = reactive<TFlowDrawerForm>({
  ...drawerFormInitData,
})

const openDrawer = async ({ id, type }: { id?: number; type: TDrawerType }) => {
  if (id && (type === 'copy' || type === 'edit')) {
    try {
      formLoading.value = true
      const { data } = await getFlowById({ id })
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
        const { data } = await saveFlow(drawerForm)
        if (data?.id) {
          subLoading.value = false
          await nextTick()
          drawerRef.value?.closeDrawer()
          drawerConfirmCb?.()
        }
      } else {
        throw new Error('saveFlow Error')
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
          <el-form-item label="流量包名称" prop="name">
            <el-input placeholder="请输入" v-model.trim="drawerForm.name" />
          </el-form-item>
          <el-form-item label="Pid" prop="pid">
            <el-input-number placeholder="请输入" v-model="drawerForm.pid" class="!w-full" />
          </el-form-item>
          <el-form-item prop="tagId" class="flex-1">
            <template #label>
              <div class="flex flex-col *:h-4 *:leading-[22px]">
                <span class="text-sm">广告位id</span>
                <span class="text-xs text-[#777988]/80">tagId</span>
              </div>
            </template>
            <el-input-number placeholder="请输入" v-model="drawerForm.tagId" class="!w-full" />
          </el-form-item>
          <el-form-item prop="mediaId" class="flex-1">
            <template #label>
              <div class="flex flex-col *:h-4 *:leading-[22px]">
                <span class="text-sm">媒体id</span>
                <span class="text-xs text-[#777988]/80">mediaId</span>
              </div>
            </template>
            <el-input-number placeholder="请输入" v-model="drawerForm.mediaId" class="!w-full" />
          </el-form-item>
          <el-form-item prop="bidType" class="flex-1">
            <template #label>
              <div class="flex flex-col *:h-4 *:leading-[22px]">
                <span class="text-sm">流量类型</span>
                <span class="text-xs text-[#777988]/80">bidType</span>
              </div>
            </template>
            <el-input placeholder="请输入" v-model.trim="drawerForm.bidType" />
          </el-form-item>
          <el-form-item label="模板id" prop="templateId">
            <el-input-number placeholder="请输入" v-model="drawerForm.templateId" class="!w-full" />
          </el-form-item>
          <el-form-item prop="width" class="flex-1">
            <template #label>
              <div class="flex flex-col *:h-4 *:leading-[22px]">
                <span class="text-sm">图片宽</span>
                <span class="text-xs text-[#777988]/80">width</span>
              </div>
            </template>
            <el-input-number placeholder="请输入" v-model="drawerForm.width" class="!w-full" />
          </el-form-item>
          <el-form-item prop="height" class="flex-1">
            <template #label>
              <div class="flex flex-col *:h-4 *:leading-[22px]">
                <span class="text-sm">图片高</span>
                <span class="text-xs text-[#777988]/80">height</span>
              </div>
            </template>
            <el-input-number placeholder="请输入" v-model="drawerForm.height" class="!w-full" />
          </el-form-item>
          <el-form-item label="包名" prop="appBundle">
            <el-input placeholder="请输入" v-model.trim="drawerForm.appBundle" />
          </el-form-item>
          <el-form-item label="app名称" prop="appName">
            <el-input placeholder="请输入" v-model.trim="drawerForm.appName" />
          </el-form-item>
          <!-- <el-form-item label="请求模版参数" prop="appName">
            <el-input placeholder="请输入" v-model.trim="drawerForm.appName" />
          </el-form-item> -->
        </el-form>
      </CardInDrawer>
    </template>
  </DrawerWrap>
</template>

<style scoped></style>
