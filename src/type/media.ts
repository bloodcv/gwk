import type { TRequestTableBase } from "./query"

export type TMediaTableItem = {
  id: number
  name: string
  mediaType: string
  supplier: string
}

export type TMediaTableApiProps = {
  search?: string
}

export type TGetMediaListProps = TRequestTableBase & TMediaTableApiProps

export type TMediaDrawerForm = Partial<TMediaTableItem>
