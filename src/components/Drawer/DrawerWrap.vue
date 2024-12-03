<script setup lang="ts">
import { ref, watch } from 'vue'

const { title, drawerCancel, drawerConfirm, subLoading } = defineProps<{
  title?: string
  subLoading?: boolean
  drawerCancel?: () => void
  drawerConfirm?: () => void
}>()

const drawerStatus = ref(false)

const handleClose = (done: () => void) => {}

function cancelClick() {
  drawerStatus.value = false
  drawerCancel?.()
}
function confirmClick() {
  drawerConfirm?.()
}

const openDrawer = () => {
  drawerStatus.value = true
}

const beforeClose = (done: () => void) => {
  if (subLoading) return
  done()
}

defineExpose({
  openDrawer,
})
</script>

<template>
  <el-drawer
    v-model="drawerStatus"
    :before-close="beforeClose"
    direction="rtl"
    :show-close="false"
    class="drawer-wrap !bg-adx-gray !w-[55rem]"
  >
    <template #header>
      <div class="h-14 bg-white flex items-center px-6">
        <h4 class="text-font-c1 font-semibold">{{ title }}</h4>
        <el-button class="ml-auto !border-none" @click="cancelClick" :disabled="subLoading" circle
          ><img src="@/assets/img/close.png" alt="" class="w-4 h-4"
        /></el-button>
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
