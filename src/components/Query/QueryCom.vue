<script setup lang="ts">
import clsx from 'clsx'
import { onMounted, reactive, ref, type PropType } from 'vue'
import type { FormInstance, FormItemRule } from 'element-plus'
import type { FTSearchHandle, TQueryFormMap, TValueType } from '@/type';

/* const {
  className,
  formClassName,
  formActionClassName,
  queryFormMap = {},
  searchHandle,
} = defineProps({
  className: String,
  formClassName: String,
  formActionClassName: String,
  queryFormMap: Object as PropType<TQueryFormMap>,
  searchHandle: Function as PropType<FTSearchHandle>,
}) */

const {
  className,
  formClassName,
  formActionClassName,
  queryFormMap = {},
  searchHandle
} = defineProps<{
  className?: string
  formClassName?: string
  formActionClassName?: string
  queryFormMap?: TQueryFormMap,
  searchHandle: FTSearchHandle
}>()

const queryFormRef = ref<FormInstance>()
const queryForm = reactive<Record<string, TValueType>>({})

const rules = reactive<Record<string, FormItemRule[]>>({})

onMounted(() => {
  console.log('queryFormMap', queryFormMap)
  Object.entries(queryFormMap).forEach(([key, item]) => {
    rules[key] = item.rule || []
    queryForm[key] = item.value || ''
  })
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      searchHandle?.(queryForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

defineExpose({
  queryForm
})
</script>

<template>
  <div :class="clsx('flex', className)">
    <el-form
      ref="queryFormRef"
      :model="queryForm"
      :rules="rules"
      label-width="fit"
      :class="clsx('flex flex-wrap gap-x-4 mr-4', formClassName)"
    >
      <template v-for="[key, item] in Object.entries(queryFormMap)" :key="key">
        <el-form-item v-if="item.type === 'input'" :label="item.label" :prop="key">
          <el-input v-model="queryForm[key]" :placeholder="item.placeholder" :class="clsx('!w-60', item.className)" />
        </el-form-item>
      </template>
      <el-form-item :class="clsx(formActionClassName)">
        <el-button type="primary" @click="submitForm(queryFormRef)">查询</el-button>
        <slot name="formAction" />
      </el-form-item>
    </el-form>
    <div class="ml-auto mr-0">
      <slot name="extraAction" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-form-item__label) {
  @apply text-font-c1 text-sm flex items-center;
}
</style>
