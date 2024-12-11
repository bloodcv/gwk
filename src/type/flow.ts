import type { TRequestTableBase } from "./query"

export type TFlowTableItem = {
  appBundle: string
  appName: string
  bidType: string
  fieldList: string[]
  height: number
  id: number
  name: string
  pid: number
  publisherId: number
  tagId: number
  templateId: number
  width: number
  mediaId: number
}

export type TFlowTableApiProps = {
  search?: string
}

export type TGetFlowListProps = TRequestTableBase & TFlowTableApiProps

export type TFlowDrawerForm = Partial<TFlowTableItem>
