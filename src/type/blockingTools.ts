import type { TRequestTableBase } from "./query"

export type TBlockingToolsTableItem = {
  active: boolean
  deeplink: string
  dsp: string
  id: number
  imageUrl: string
  landingPage: string
  supplier: string
  tagId: number
  text: string
  videoUrl: string
}

export type TBlockingToolsTableApiProps = {
  search?: string
}

export type TGetBlockingToolsListProps = TRequestTableBase & TBlockingToolsTableApiProps

export type TBlockingToolsDrawerForm = Partial<TBlockingToolsTableItem>
