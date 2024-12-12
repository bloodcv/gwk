import type { TRequestTableBase } from "./query"

export type TDeliveryPlansTableItem = {
  id: number
  active: boolean // 计划状态
  activeLoading?: boolean
  name: string // 计划名称
  dsp: string // DSP
  supplier: string // 供应商
  slotId: number // 广告位
  flowPackageId: number // 流量包
  settleSupplierBidType: string // 媒体结算方式
  settleSupplierBidFloorRatio: number // 媒体溢价系数
  settleSupplierBidPrice: number // 媒体固定结算价
  settleDspBidType: string // DSP结算方式
  settleDspWinPriceRatio: number // DSP成交价系数
  settleDspWinPriceRatioRange: number // DSP成交价浮动系数
  settleDspWinPrice: number // DSP固定结算价
  settleDspBidFloorRatio: number // 请求底价系数
  settleDspBidFloor: number // 请求固定底价
  settleDspProfitRate: number // 利润率
  filterAppBundle: string // 包名定向
  filterModel: string // 机型定向
  filterTemplateId: number // 媒体模板定向
  filterEmptyIp: boolean // 有IP下发定向
  filterDealId: number // DealID定向
  filterQps: number // QPS
  requestDspAppBundle: string // 包名替换
  requestDspAppName: string // APP名称
  requestDspAppVersion: string // appVersion
  requestDspUa: string // ua
  filterMaxImpTrackingCount: number // 监测条数
  adxSkipImpTrackingUrl: boolean // 曝光监测
  adxSkipClickTrackingUrl: boolean // 点击监测
  filterBlackDomainList: string // 曝光域名融合
  filterBlackKeywordList: string// 落地页屏蔽
  valueTypeMap: Record<'requestDspAppVersion' | 'requestDspUa', string>
}

export type TDeliveryPlansTableApiProps = {
  search?: string
}

export type TGetDeliveryPlansListProps = TRequestTableBase & TDeliveryPlansTableApiProps

export type TDeliveryPlansDrawerForm = Partial<Omit<TDeliveryPlansTableItem, 'valueTypeMap'>> & {
  valueTypeMap: TDeliveryPlansTableItem['valueTypeMap']
}


