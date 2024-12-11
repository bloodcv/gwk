import { getFlowList, getLists, getMediaList, getNewAdList, getSupplierList } from '@/http/api'
import type { TFlowTableItem, TMediaTableItem, TNewAdTableItem, TSupplierListItem } from '@/type'
import { defineStore } from 'pinia'

type IDictBase = 'BidTypeList' | 'DspList' | 'EventList' | 'MediaList' | 'MediaTypeList' | 'OpenTypeList' | 'SlotTypeList' | 'ValueTypeList' | 'TemplateFieldList' | 'TemplateStyleList' | 'TemplateTypeList'

type TDictStoreState = {
  dictLoading: boolean
  adList: TNewAdTableItem[]
  flowList: TFlowTableItem[]
  supplierList: TSupplierListItem[]
  MediaIdList: TMediaTableItem[]
  MediaList: string[]
  DspList: string[]
  BidTypeList: string[] // 合作模式
  EventList: string[]
  MediaTypeList: string[]
  OpenTypeList: string[] // 唤端方式
  SlotTypeList: string[] // 类型
  ValueTypeList: string[]
  TemplateFieldList: string[]
  TemplateStyleList: string[]
  TemplateTypeList: string[]
}

export const useDictStore = defineStore('dict', {
  state: (): TDictStoreState => ({
    dictLoading: false,
    adList: [],
    flowList: [],
    supplierList: [],
    MediaIdList: [],
    MediaList: [],
    DspList: [],
    BidTypeList: [],
    EventList: [],
    MediaTypeList: [],
    OpenTypeList: [],
    SlotTypeList: [],
    ValueTypeList: [],
    TemplateFieldList: [],
    TemplateStyleList: [],
    TemplateTypeList: []
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
    async updateAdList() {
      try {
        const { data: { content } } = await getNewAdList({
          page: 0,
          size: 9999999,
          sort: ''
        })
        content && (this.adList = [...content]);
      } catch (error) {
        console.log('getNewAdList error', error);
      }
    },
    async updateFlowList() {
      try {
        const { data: { content } } = await getFlowList({
          page: 0,
          size: 9999999,
          sort: ''
        })
        content && (this.flowList = [...content]);
      } catch (error) {
        console.log('getFlowList error', error);
      }
    },
    async updateLists() {
      try {
        const { data } = await getLists()
        data && Object.entries(data).forEach(([key, value]) => {
          const storeKey = `${key}List` as (keyof Pick<TDictStoreState, IDictBase>)
          this[storeKey] && value && (this[storeKey] = [...(value as string[])])
        })
      } catch (error) {
        console.log('getLists error', error);
      }
    }
  },
})
