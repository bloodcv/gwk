import type { TRequestTableBase } from "./query"

export type TTemplateTableItem = {
  actionText: number
  actionType: string
  adWords: number
  advName: string
  appBundle: string
  appName: string
  description: string
  id: number
  imgSmHeight: number
  imgSmUrl: string
  imgSmWidth: number
  imgUrl: number
  imgUrlHeight: number
  imgUrlWidth: number
  itemId: number
  name: string
  publisherAccountId: number
  templateId: string
  title: string
  valueTypeMap: Record<keyof Omit<TTemplateTableItem, 'valueTypeMap' | 'id'>, string>
  videoDuration: number
  videoHeight: number
  videoUrl: string
  videoWidth: number
}

export enum PRIORITY {
  REPLACE = '替换',
  FALLBACK = '兜底',
}

export type TTemplateTableApiProps = {
  search?: string
}

export type TGetTemplateListProps = TRequestTableBase & TTemplateTableApiProps

// export type TTemplateDrawerForm = Partial<TTemplateTableItem>
export type TTemplateDrawerForm = Partial<Omit<TTemplateTableItem, 'valueTypeMap'>> & {
  valueTypeMap: TTemplateTableItem['valueTypeMap']
}
