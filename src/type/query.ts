import type { FormItemRule } from "element-plus"

export type TQueryItemType = 'input' | 'multiSelect' | 'multiSelectWithSearch' | 'multiSelectWithAll' | 'singleSelect' | 'dateRange'
export type TValueType = string | number | number[] | string[]

export type TQueryItem<T = string, V = string> = {
  key: string
  label: string
  placeholder?: string
  type: TQueryItemType
  options?: T[]
  value: V
  rule?: FormItemRule[]
  className?: string
}

export type TQueryFormMap<T = string, V = string> = Record<string, TQueryItem<T, V>>

export type FTSearchHandle = (params: Record<string, TValueType>) => Promise<void>

export type TRequestTableBase = {
  page: number
  size: number
  sort: string
}
