export type TTableOptionsItem = {
  key: string
  label: string
  slot?: string
}

export type TPageInfo = {
  currentPage: number
  pageSize: number
  total: number
  disabled?: boolean
}
