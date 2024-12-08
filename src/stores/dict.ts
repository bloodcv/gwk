import { getLists, getMediaList, getSupplierList } from '@/http/api'
import type { TMediaTableItem, TSupplierListItem } from '@/type'
import { defineStore } from 'pinia'

type TDictStoreState = {
  dictLoading: boolean
  supplierList: TSupplierListItem[]
  // templateList: string[]
  MediaIdList: TMediaTableItem[]
  MediaList: string[]
  DspList: string[]
  BidTypeList: string[] // 合作模式
  EventList: string[]
  MediaTypeList: string[]
  OpenTypeList: string[] // 唤端方式
  SlotTypeList: string[] // 类型
  ValueTypeList: string[]
}

export const useDictStore = defineStore('dict', {
  state: (): TDictStoreState => ({
    dictLoading: false,
    supplierList: [],
    // templateList: [],
    MediaIdList: [],
    MediaList: [],
    DspList: [],
    BidTypeList: [],
    EventList: [],
    MediaTypeList: [],
    OpenTypeList: [],
    SlotTypeList: [],
    ValueTypeList: []
  }),
  actions: {
    async updateSupplierList() {
      try {
        const { data: { content } } = await getSupplierList({
          page: 0,
          size: 9999999,
          sort: ''
        })
        content && (this.supplierList = [...content]);
      } catch (error) {
        console.log('getSupplierList error', error);
      }
    },
    async updateMediaIdList() {
      try {
        const { data: { content } } = await getMediaList({
          page: 0,
          size: 9999999,
          sort: ''
        })
        content && (this.MediaIdList = [...content]);
      } catch (error) {
        console.log('getMediaList error', error);
      }
    },
    async updateLists() {
      try {
        const { data } = await getLists()
        data && Object.entries(data).forEach(([key, value]) => {
          const storeKey = `${key}List` as (keyof Omit<TDictStoreState, 'dictLoading' | 'supplierList' | 'MediaIdList'>)
          this[storeKey] && value && (this[storeKey] = [...(value as string[])])
        })
      } catch (error) {
        console.log('getLists error', error);
      }
    }
  },
})
