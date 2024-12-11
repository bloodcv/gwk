<script setup lang="ts">
import type { TEmptyFn } from '@/type';
import type { ElDrawer } from 'element-plus';
import { ref } from 'vue'

const { title, subLoading, drawerConfirm, afterCloseCb } = defineProps<{
  title?: string
  subLoading?: boolean
  drawerConfirm?: TEmptyFn
  afterCloseCb?: TEmptyFn
}>()

const drawerStatus = ref(false)
const drawerRef = ref<InstanceType<typeof ElDrawer>>()

const cancelClick = () => drawerRef.value?.handleClose()

const confirmClick = () => drawerConfirm?.()

const openDrawer = () => {
  drawerStatus.value = true
}

const beforeClose = (done: (cancel?: boolean) => void) => {
  if (subLoading) {
    done(true)
  } else {
    done()
  }
}

const afterClose = () => {
  afterCloseCb?.()
}

defineExpose({
  openDrawer,
  closeDrawer: cancelClick,
})
</script>

<template>
  <el-drawer ref="drawerRef" v-model="drawerStatus" :before-close="beforeClose" destroy-on-close @closed="afterClose"
    :close-on-press-escape="false" direction="rtl" :show-close="false" class="drawer-wrap !bg-adx-gray !w-[55rem]">
    <template #header>
      <div class="h-14 bg-white flex items-center px-6">
        <h4 class="text-font-c1 font-semibold">{{ title }}</h4>
        <el-button class="ml-auto !border-none" @click="cancelClick" :disabled="subLoading" circle><img
            src="@/assets/img/close.png" alt="" class="w-4 h-4" /></el-button>
      </div>
    </template>
    <template #default>
      <el-scrollbar>
        <div class="py-4 px-6">
          <slot name="drawerContent" />
        </div>
      </el-scrollbar>
    </template>
    <template #footer>
      <div class="h-18 px-6 bg-white flex justify-start items-center">
        <el-button type="primary" @click="confirmClick" :loading="subLoading">确定</el-button>
        <el-button @click="cancelClick" :disabled="subLoading">取消</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<style lang="scss" scoped></style>
