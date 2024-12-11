import type { TRequestTableBase } from "./query"

export type TDeliveryPlansTableItem = {
  bidFloor: number
  bidFloorRatio: number
  dsp: string
  id: number
  maxQps: number
  name: string
  profitRate: number
  requestUrl: string
  winPriceRatio: number
  winPriceRatioRange: number
}

export type TDeliveryPlansTableApiProps = {
  search?: string
}

export type TGetDeliveryPlansListProps = TRequestTableBase & TDeliveryPlansTableApiProps

export type TDeliveryPlansDrawerForm = Partial<TDeliveryPlansTableItem>
