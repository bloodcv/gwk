<script setup lang="ts">
import clsx from 'clsx'

const { className, formClassName, formActionClassName } = defineProps({
  className: String,
  formClassName: String,
  formActionClassName: String,
})

import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  name: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: false, message: 'Please input Activity name', trigger: 'change' }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
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
}
</script>

<template>
  <div :class="clsx('flex', className)">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="fit"
      :class="clsx('flex flex-wrap gap-x-4', formClassName)"
    >
      <el-form-item label="Activity" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="Activity name sdsds" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="Activity name sdsds" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="Activity name sdsds" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="Activity name sdsds" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="Activity name sdsds" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item :class="clsx(formActionClassName)">
        <el-button type="primary" @click="submitForm(ruleFormRef)"> Create </el-button>
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
