export type TDrawerType = 'edit' | 'new' | 'copy'
export type TEmptyFn = () => void
export type TEmptyPromiseFn = () => Promise<void>
export type TSupplierListItem = {
  active: boolean
  id: number
  name: string
  supplier: {
    id: number
    mediaType: string,
    name: string,
    supplier: string,
  }
}

export * from './query'
export * from './table'
export * from './dsp'
export * from './media'
export * from './newAd'
