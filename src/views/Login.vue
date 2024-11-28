<script setup lang="ts">
/* import { testGetBlockingTool } from '@/http/api'

const apiDataTest = async () => {
  const res = await testGetBlockingTool({
    offset: 1,
    pageNumber: 1,
    pageSize: 5,
    paged: true,
    'sort.sorted': true,
  })
  console.log(res, 'res')
} */
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import clsx from 'clsx'

interface RuleForm {
  name: string
  password: string
}

const formSize = ref<ComponentSize>('large')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  password: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: '请输入账号', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码', trigger: 'change' }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!ruleFormRef.value) return
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', ruleForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <PageWrap className="bg-login bg-cover bg-no-repeat bg-center flex items-center justify-center">
    <!-- <div class="border p-4">
      <h1>Login</h1>
      <el-button type="primary" @click="apiDataTest">get api data</el-button>
    </div> -->
    <div
      class="w-[28.75rem] bg-white rounded-[1.25rem] shadow-[0px_3px_20px_0px_rgba(19,20,27,0.08)] px-10 pb-20 pt-16"
    >
      <h1 class="text-[#13141B] text-2xl font-semibold mb-11">欢迎登录ADX系统</h1>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        :size="formSize"
        status-icon
      >
        <el-form-item prop="name" class="!mb-8">
          <el-input
            v-model="ruleForm.name"
            clearable
            :class="
              clsx('h-12 rounded-xl !text-base', {
                '*:!bg-[#EAEBF0] *:!shadow-none': !ruleForm.name,
              })
            "
            placeholder="请输入账号"
          />
        </el-form-item>
        <el-form-item prop="password" class="!mb-14">
          <el-input
            v-model="ruleForm.password"
            clearable
            :class="
              clsx('h-12 rounded-xl !text-base', {
                '*:!bg-[#EAEBF0] *:!shadow-none': !ruleForm.password,
              })
            "
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item class="!mb-0">
          <el-button
            type="primary"
            class="!w-full !h-12 text-white text-base font-semibold rounded-xl"
            @click="submitForm"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </PageWrap>
</template>

<style scoped></style>
