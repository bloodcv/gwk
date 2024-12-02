import type { TRequestTableBase } from "./query"

export type TDspTableItem = {
  active: boolean
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

export type TDspTableApiProps = {
  search?: string
}

export type TGetDspListProps = TRequestTableBase & TDspTableApiProps
