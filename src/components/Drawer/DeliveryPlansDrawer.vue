<script setup lang="ts">
import DrawerWrap from '@/components/Drawer/DrawerWrap.vue'
import { nextTick, reactive, ref } from 'vue'
import CardInDrawer from '@/components/Drawer/CardInDrawer.vue'
import type { FormInstance } from 'element-plus'
import {
  type TDrawerType,
  type TDeliveryPlansDrawerForm,
  type TEmptyPromiseFn,
  PRIORITY,
} from '@/type'
import { getDeliveryPlansById, saveDeliveryPlans } from '@/http/api'
import { useDictStore } from '@/stores/dict'

const { title, drawerConfirmCb } = defineProps<{
  title?: string
  drawerConfirmCb?: TEmptyPromiseFn
}>()
const drawerFormInitData: TDeliveryPlansDrawerForm = {
  id: undefined,
  active: false, // 计划状态
  name: '', // 计划名称
  dsp: '', // DSP
  supplier: '', // 供应商
  slotId: undefined, // 广告位
  flowPackageId: undefined, // 流量包
  settleSupplierBidType: '', // 媒体结算方式
  settleSupplierBidFloorRatio: undefined, // 媒体溢价系数
  settleSupplierBidPrice: undefined, // 媒体固定结算价
  settleDspBidType: '', // DSP结算方式
  settleDspWinPriceRatio: undefined, // DSP成交价系数
  settleDspWinPriceRatioRange: undefined, // DSP成交价浮动系数
  settleDspWinPrice: undefined, // DSP固定结算价
  settleDspBidFloorRatio: undefined, // 请求底价系数
  settleDspBidFloor: undefined, // 请求固定底价
  settleDspProfitRate: undefined, // 利润率
  filterAppBundle: '', // 包名定向
  filterModel: '', // 机型定向
  filterTemplateId: undefined, // 媒体模板定向
  filterEmptyIp: false, // 有IP下发定向
  filterDealId: undefined, // DealID定向
  filterQps: undefined, // QPS
  requestDspAppBundle: '', // 包名替换
  requestDspAppName: '', // APP名称
  requestDspAppVersion: '', // appVersion
  requestDspUa: '', // ua
  filterMaxImpTrackingCount: undefined, // 监测条数
  adxSkipImpTrackingUrl: false, // 曝光监测
  adxSkipClickTrackingUrl: false, // 点击监测
  filterBlackDomainList: '', // 曝光域名融合
  filterBlackKeywordList: '', // 落地页屏蔽
  valueTypeMap: {
    requestDspAppVersion: PRIORITY.REPLACE, // appVersion
    requestDspUa: PRIORITY.REPLACE, // ua
  },
}
const formLoading = ref<boolean>(false)
const subLoading = ref<boolean>(false)
const drawerRef = ref<InstanceType<typeof DrawerWrap>>()
const drawerFormRef = ref<FormInstance>()
const drawerForm = reactive<TDeliveryPlansDrawerForm>({
  ...drawerFormInitData,
})
const dictStore = useDictStore()

const openDrawer = async ({ id, type }: { id?: number; type: TDrawerType }) => {
  if (id && (type === 'copy' || type === 'edit')) {
    try {
      formLoading.value = true
      const { data } = await getDeliveryPlansById({ id })
      Object.assign(drawerForm, data)
      Object.assign(drawerForm.valueTypeMap, data.valueTypeMap || {})
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
  Object.assign(drawerForm.valueTypeMap, drawerFormInitData.valueTypeMap)
}

const drawerConfirm = async () => {
  try {
    subLoading.value = true
    await drawerFormRef.value?.validate(async (valid) => {
      if (valid) {
        const { data } = await saveDeliveryPlans(drawerForm)
        if (data?.id) {
          subLoading.value = false
          await nextTick()
          drawerRef.value?.closeDrawer()
          drawerConfirmCb?.()
        }
      } else {
        throw new Error('saveDeliveryPlans Error')
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
        label-width="150"
        label-position="left"
        class="flex flex-col gap-4"
      >
        <CardInDrawer>
          <el-form-item label="计划状态" prop="active">
            <el-switch v-model="drawerForm.active" />
          </el-form-item>
        </CardInDrawer>
        <CardInDrawer title="基础信息">
          <el-form-item label="计划名称" prop="name">
            <el-input placeholder="请输入" v-model.trim="drawerForm.name" />
          </el-form-item>
          <el-form-item label="DSP" prop="dsp">
            <el-select
              v-model="drawerForm.dsp"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option v-for="_ in dictStore.DspList" :key="_" :label="_" :value="_" />
            </el-select>
          </el-form-item>
          <el-form-item label="供应商" prop="supplier">
            <el-select
              v-model="drawerForm.supplier"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option
                v-for="_ in dictStore.supplierList"
                :key="_.id"
                :label="_.name"
                :value="_.name"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="广告位" prop="slotId">
            <el-select
              v-model="drawerForm.slotId"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option v-for="_ in dictStore.SlotTypeList" :key="_" :label="_" :value="_" />
            </el-select>
          </el-form-item>
          <el-form-item label="流量包" prop="flowPackageId">
            <el-select
              v-model="drawerForm.flowPackageId"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option
                v-for="_ in dictStore.flowList"
                :key="_.id"
                :label="_.name"
                :value="_.id"
              />
            </el-select>
          </el-form-item>
        </CardInDrawer>
        <CardInDrawer title="价格信息">
          <el-form-item label="媒体结算方式" prop="settleSupplierBidType">
            <el-select
              v-model="drawerForm.settleSupplierBidType"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option v-for="_ in dictStore.BidTypeList" :key="_" :label="_" :value="_" />
            </el-select>
          </el-form-item>
          <el-form-item label="媒体溢价系数" prop="settleSupplierBidFloorRatio">
            <el-select
              v-model="drawerForm.settleSupplierBidFloorRatio"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option v-for="_ in [1, 2, 3, 4, 5]" :key="_" :label="_" :value="_" />
            </el-select>
          </el-form-item>
          <el-form-item label="媒体固定结算价" prop="settleSupplierBidPrice">
            <el-input-number
              placeholder="请输入"
              v-model="drawerForm.settleSupplierBidPrice"
              class="!w-full"
            />
          </el-form-item>
          <el-form-item label="DSP结算方式" prop="settleDspBidType">
            <el-select
              v-model="drawerForm.settleDspBidType"
              placeholder="请选择"
              :loading="dictStore.dictLoading"
            >
              <el-option v-for="_ in dictStore.BidTypeList" :key="_" :label="_" :value="_" />
            </el-select>
          </el-form-item>
          <el-form-item label="DSP成交价系数" prop="settleDspWinPriceRatio">
            <el-input-number
              placeholder="请输入"
              v-model="drawerForm.settleDspWinPriceRatio"
              class="!w-full"
            />
          </el-form-item>
          <el-form-item label="DSP成交价浮动系数" prop="settleDspWinPriceRatioRange">
            <el-input-number
              placeholder="请输入"
              v-model="drawerForm.settleDspWinPriceRatioRange"
              class="!w-full"
            />
          </el-form-item>
          <el-form-item label="DSP固定结算价" prop="settleDspWinPrice">
            <el-input-number
              placeholder="请输入"
              v-model="drawerForm.settleDspWinPrice"
              class="!w-full"
            />
          </el-form-item>
          <el-form-item label="请求底价系数" prop="settleDspBidFloorRatio">
            <el-input-number
              placeholder="请输入"
              v-model="drawerForm.settleDspBidFloorRatio"
              class="!w-full"
            />
          </el-form-item>
          <el-form-item label="请求固定底价" prop="settleDspBidFloor">
            <el-input-number
              placeholder="请输入"
              v-model="drawerForm.settleDspBidFloor"
              class="!w-full"
            />
          </el-form-item>
          <el-form-item label="利润率" prop="settleDspProfitRate">
            <el-input-number
              placeholder="请输入"
              v-model="drawerForm.settleDspProfitRate"
              class="!w-full"
            />
          </el-form-item>
        </CardInDrawer>
        <CardInDrawer title="定向条件">
          <el-form-item label="包名定向" prop="filterAppBundle">
            <el-input placeholder="请输入" v-model.trim="drawerForm.filterAppBundle" />
          </el-form-item>
          <el-form-item label="机型定向" prop="filterModel">
            <el-input placeholder="请输入" v-model.trim="drawerForm.filterModel" />
          </el-form-item>
          <el-form-item label="媒体模板定向" prop="filterTemplateId">
            <el-input-number
              placeholder="请输入"
              v-model="drawerForm.filterTemplateId"
              class="!w-full"
            />
          </el-form-item>
          <el-form-item label="有IP下发定向" prop="filterEmptyIp">
            <el-switch v-model="drawerForm.filterEmptyIp" />
          </el-form-item>
          <el-form-item label="DealID定向" prop="filterDealId">
            <el-input-number
              placeholder="请输入"
              v-model="drawerForm.filterDealId"
              class="!w-full"
            />
          </el-form-item>
          <el-form-item label="QPS" prop="filterQps">
            <el-input-number placeholder="请输入" v-model="drawerForm.filterQps" class="!w-full" />
          </el-form-item>
        </CardInDrawer>
        <CardInDrawer title="请求替换">
          <el-form-item label="包名替换" prop="requestDspAppBundle">
            <el-input placeholder="请输入" v-model.trim="drawerForm.requestDspAppBundle" />
          </el-form-item>
          <el-form-item label="APP名称" prop="requestDspAppName">
            <el-input placeholder="请输入" v-model.trim="drawerForm.requestDspAppName" />
          </el-form-item>
          <div class="flex">
            <el-form-item label="appVersion" prop="requestDspAppVersion" class="flex-1">
              <el-input placeholder="请输入" v-model.trim="drawerForm.requestDspAppVersion" />
            </el-form-item>
            <el-form-item
              label="优先级"
              class="priority w-1/4"
              prop="valueTypeMap.requestDspAppVersion"
            >
              <el-select
                v-model="drawerForm.valueTypeMap.requestDspAppVersion"
                placeholder="请选择"
              >
                <el-option v-for="_ in dictStore.ValueTypeList" :key="_" :label="_" :value="_" />
              </el-select>
            </el-form-item>
          </div>
          <div class="flex">
            <el-form-item label="ua" prop="requestDspUa" class="flex-1">
              <el-input placeholder="请输入" v-model.trim="drawerForm.requestDspUa" />
            </el-form-item>
            <el-form-item label="优先级" class="priority w-1/4" prop="valueTypeMap.requestDspUa">
              <el-select v-model="drawerForm.valueTypeMap.requestDspUa" placeholder="请选择">
                <el-option v-for="_ in dictStore.ValueTypeList" :key="_" :label="_" :value="_" />
              </el-select>
            </el-form-item>
          </div>
        </CardInDrawer>
        <CardInDrawer title="返回过滤">
          <el-form-item label="监测条数" prop="filterMaxImpTrackingCount">
            <el-input-number
              placeholder="请输入"
              v-model="drawerForm.filterMaxImpTrackingCount"
              class="!w-full"
            />
          </el-form-item>
          <el-form-item label="曝光监测" prop="adxSkipImpTrackingUrl">
            <el-switch v-model="drawerForm.adxSkipImpTrackingUrl"
          /></el-form-item>
          <el-form-item label="点击监测" prop="adxSkipClickTrackingUrl">
            <el-switch v-model="drawerForm.adxSkipClickTrackingUrl"
          /></el-form-item>
          <el-form-item label="曝光域名融合" prop="filterBlackDomainList">
            <el-input placeholder="请输入" v-model.trim="drawerForm.filterBlackDomainList"
          /></el-form-item>
          <el-form-item label="落地页屏蔽" prop="filterBlackKeywordList">
            <el-input placeholder="请输入" v-model.trim="drawerForm.filterBlackKeywordList"
          /></el-form-item>
        </CardInDrawer>
      </el-form>
    </template>
  </DrawerWrap>
</template>

<style lang="scss" scoped>
:deep(.el-switch) {
  --el-switch-on-color: #13ce66;
  --el-switch-off-color: #ff4949;
}

.priority {
  :deep(.el-form-item__label) {
    width: 80px !important;
    @apply justify-center pr-0 pl-2;
  }
}
</style>
