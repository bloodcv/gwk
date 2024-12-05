import type { TRequestTableBase } from "./query"

export type TNewAdTableItem = {
  bidType: string
  ctr: number
  dailyRequest: number
  ecpm: number
  id: number
  maxImpTrackingCount: number
  maxProcessTime: number
  mediaAdSlotId: number
  mediaId: number
  name: string
  openType: string
  pdPrice: number
  requirements: string
  slotType: string
  templateId: number
  terminal: number
}

export type TNewAdTableApiProps = {
  search?: string
}

export type TGetNewAdListProps = TRequestTableBase & TNewAdTableApiProps

export type TNewAdDrawerForm = Partial<TNewAdTableItem>
