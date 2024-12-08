<script setup lang="ts">
import DrawerWrap from '@/components/Drawer/DrawerWrap.vue'
import { nextTick, reactive, ref } from 'vue'
import CardInDrawer from '@/components/Drawer/CardInDrawer.vue'
import type { FormInstance } from 'element-plus'
import {
  type TDrawerType,
  type TTemplateDrawerForm,
  type TEmptyPromiseFn,
  PRIORITY,
  type TTemplateTableItem,
} from '@/type'
import { getTemplateById, saveTemplate } from '@/http/api'

const drawerFormConfig: {
  key: keyof TTemplateTableItem['valueTypeMap']
  name: string
  type: 'string' | 'number'
}[] = [
  {
    key: 'name',
    name: '模板名称',
    type: 'string',
  },
  {
    key: 'templateId',
    name: '模板id',
    type: 'string',
  },
  {
    key: 'title',
    name: '标题',
    type: 'string',
  },
  {
    key: 'description',
    name: '描述',
    type: 'string',
  },
  {
    key: 'advName',
    name: '广告主名称',
    type: 'string',
  },
  {
    key: 'imgUrl',
    name: '图片',
    type: 'string',
  },
  {
    key: 'imgUrlWidth',
    name: '图片宽',
    type: 'number',
  },
  {
    key: 'imgUrlHeight',
    name: '图片高',
    type: 'number',
  },
  {
    key: 'videoUrl',
    name: '视频',
    type: 'string',
  },
  {
    key: 'videoWidth',
    name: '视频宽',
    type: 'number',
  },
  {
    key: 'videoHeight',
    name: '视频高',
    type: 'number',
  },
  {
    key: 'videoDuration',
    name: '视频时长',
    type: 'number',
  },
  {
    key: 'imgSmUrl',
    name: '头像',
    type: 'string',
  },
  {
    key: 'imgSmWidth',
    name: '头像宽',
    type: 'number',
  },
  {
    key: 'imgSmHeight',
    name: '头像高',
    type: 'number',
  },
  {
    key: 'adWords',
    name: '正文',
    type: 'string',
  },
  {
    key: 'actionText',
    name: '按钮文案',
    type: 'string',
  },
  {
    key: 'publisherAccountId',
    name: '免审账号',
    type: 'string',
  },
  {
    key: 'itemId',
    name: '类目id',
    type: 'string',
  },
  {
    key: 'actionType',
    name: '按钮类型',
    type: 'string',
  },
  {
    key: 'appBundle',
    name: '包名',
    type: 'string',
  },
  {
    key: 'appName',
    name: 'app名称',
    type: 'string',
  },
]

const { title, drawerConfirmCb } = defineProps<{
  title?: string
  drawerConfirmCb?: TEmptyPromiseFn
}>()
const drawerFormInitData: TTemplateDrawerForm = {
  actionText: undefined,
  actionType: '',
  adWords: undefined,
  advName: '',
  appBundle: '',
  appName: '',
  description: '',
  imgSmHeight: undefined,
  imgSmUrl: '',
  imgSmWidth: undefined,
  imgUrl: undefined,
  imgUrlHeight: undefined,
  imgUrlWidth: undefined,
  itemId: undefined,
  name: '',
  publisherAccountId: undefined,
  templateId: '',
  title: '',
  valueTypeMap: {
    actionText: PRIORITY.REPLACE,
    actionType: PRIORITY.REPLACE,
    adWords: PRIORITY.REPLACE,
    advName: PRIORITY.REPLACE,
    appBundle: PRIORITY.REPLACE,
    appName: PRIORITY.REPLACE,
    description: PRIORITY.REPLACE,
    imgSmHeight: PRIORITY.REPLACE,
    imgSmUrl: PRIORITY.REPLACE,
    imgSmWidth: PRIORITY.REPLACE,
    imgUrl: PRIORITY.REPLACE,
    imgUrlHeight: PRIORITY.REPLACE,
    imgUrlWidth: PRIORITY.REPLACE,
    itemId: PRIORITY.REPLACE,
    name: PRIORITY.REPLACE,
    publisherAccountId: PRIORITY.REPLACE,
    templateId: PRIORITY.REPLACE,
    title: PRIORITY.REPLACE,
    videoDuration: PRIORITY.REPLACE,
    videoHeight: PRIORITY.REPLACE,
    videoUrl: PRIORITY.REPLACE,
    videoWidth: PRIORITY.REPLACE,
  },
  videoDuration: undefined,
  videoHeight: undefined,
  videoUrl: '',
  videoWidth: undefined,
}
const formLoading = ref<boolean>(false)
const subLoading = ref<boolean>(false)
const drawerRef = ref<InstanceType<typeof DrawerWrap>>()
const drawerFormRef = ref<FormInstance>()
const drawerForm = reactive<TTemplateDrawerForm>({
  ...drawerFormInitData,
})

const openDrawer = async ({ id, type }: { id?: number; type: TDrawerType }) => {
  if (id && (type === 'copy' || type === 'edit')) {
    try {
      formLoading.value = true
      const { data } = await getTemplateById({ id })
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
        const { data } = await saveTemplate(drawerForm)
        if (data?.id) {
          subLoading.value = false
          await nextTick()
          drawerRef.value?.closeDrawer()
          drawerConfirmCb?.()
        }
      } else {
        throw new Error('saveTemplate Error')
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
          <div class="flex" v-for="{ key, name, type } in drawerFormConfig" :key="key">
            <el-form-item :prop="`${key}`" class="flex-1">
              <template #label>
                <div class="flex flex-col *:h-4 *:leading-[22px]">
                  <span class="text-sm">{{ name }}</span>
                  <span class="text-xs text-[#777988]/80">{{ key }}</span>
                </div>
              </template>
              <el-input v-if="type === 'string'" placeholder="请输入" v-model.trim="drawerForm[`${key}`]" />
              <el-input-number v-if="type === 'number'" placeholder="请输入" v-model="drawerForm[`${key}`]"  class="!w-full" />
            </el-form-item>
            <el-form-item label="优先级" class="priority w-1/4" :prop="`valueTypeMap.${key}`">
              <el-select v-model="drawerForm.valueTypeMap[`${key}`]" placeholder="请选择">
                <el-option v-for="_ in Object.values(PRIORITY)" :key="_" :label="_" :value="_" />
              </el-select>
            </el-form-item>
          </div>
        </el-form>
      </CardInDrawer>
    </template>
  </DrawerWrap>
</template>

<style lang="scss" scoped>
.priority {
  :deep(.el-form-item__label) {
    width: 80px !important;
    @apply justify-center pr-0 pl-2;
  }
}
</style>
