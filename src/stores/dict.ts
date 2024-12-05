import { getSupplierList } from '@/http/api'
import type { TSupplierListItem } from '@/type'
import { defineStore } from 'pinia'

export const useDictStore = defineStore('dict', {
  state: (): {
    dictLoading: boolean
    supplierList: TSupplierListItem[]
  } => ({
    dictLoading: false,
    supplierList: []
  }),
  actions: {
    async updateSupplierList() {
      try {
        const { data: { content } } = await getSupplierList({
          page: 0,
          size: 9999999,
          sort: ''
        })
        console.log('getSupplierList', content)
        content && (this.supplierList = [...content]);
      } catch (error) {
        console.log('getSupplierList error', error);
      }
    },
  },
})
