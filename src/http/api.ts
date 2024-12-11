// 1、导入axios以及拦截器
import type { TBlockingToolsDrawerForm, TDeliveryPlansDrawerForm, TDspDrawerForm, TFlowDrawerForm, TGetBlockingToolsListProps, TGetDeliveryPlansListProps, TGetDspListProps, TGetFlowListProps, TGetMediaListProps, TGetNewAdListProps, TGetTemplateListProps, TMediaDrawerForm, TNewAdSaveForm, TRequestTableBase, TTemplateDrawerForm } from "@/type";
import service from ".";
import qs from 'qs'

const http = <T>(query: {
  url: string,
  method?: 'get' | 'post',
  data?: T
}) => {
  return service({
    method: 'post',
    ...query
  }).then(res => ({
    data: res.data,
    status: res.status,
    statusText: res.statusText
  })).catch(err => {
    return Promise.reject(err)
  })
}

export const testGetBlockingTool = (data: {
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  'sort.sorted': boolean
}) => http({
  url: '/blockingTool/find',
  method: 'get',
  data
})

export const getSupplierList = (data: TRequestTableBase) => http({
  url: `/supplier/find${qs.stringify(data, { addQueryPrefix: true })}`,
  method: 'get',
})

export const getLists = () => http({
  url: `/dict/list`,
  method: 'get',
})

export const getDspList = (data: TGetDspListProps) => http({
  url: `/dsp/find${qs.stringify(data, { addQueryPrefix: true })}`,
})

export const getDspById = (data: {id: number}) => http({
  url: `/dsp/${data.id}`,
  data
})

export const saveDsp = (data: TDspDrawerForm) => http({
  url: '/dsp/save',
  data
})

export const getMediaList = (data: TGetMediaListProps) => http({
  url: `/media/find${qs.stringify(data, { addQueryPrefix: true })}`,
})

export const getMediaById = (data: {id: number}) => http({
  url: `/media/${data.id}`,
  data
})

export const saveMedia = (data: TMediaDrawerForm) => http({
  url: '/media/save',
  data
})

export const getNewAdList = (data: TGetNewAdListProps) => http({
  url: `/slot/find${qs.stringify(data, { addQueryPrefix: true })}`,
})

export const getNewAdById = (data: {id: number}) => http({
  url: `/slot/${data.id}`,
  data
})

export const saveNewAd = (data: TNewAdSaveForm) => http({
  url: '/slot/save',
  data
})

export const getTemplateList = (data: TGetTemplateListProps) => http({
  url: `/template/find${qs.stringify(data, { addQueryPrefix: true })}`,
})

export const getTemplateById = (data: {id: number}) => http({
  url: `/template/${data.id}`,
  data
})

export const saveTemplate = (data: TTemplateDrawerForm) => http({
  url: '/template/save',
  data
})

export const getFlowList = (data: TGetFlowListProps) => http({
  url: `/flowPackage/find${qs.stringify(data, { addQueryPrefix: true })}`,
})

export const getFlowById = (data: {id: number}) => http({
  url: `/flowPackage/${data.id}`,
  data
})

export const saveFlow = (data: TFlowDrawerForm) => http({
  url: '/flowPackage/save',
  data
})

export const getBlockingToolsList = (data: TGetBlockingToolsListProps) => http({
  url: `/blockingTool/find${qs.stringify(data, { addQueryPrefix: true })}`,
})

export const getBlockingToolsById = (data: {id: number}) => http({
  url: `/blockingTool/${data.id}`,
  data
})

export const saveBlockingTools = (data: TBlockingToolsDrawerForm) => http({
  url: '/blockingTool/save',
  data
})

export const getDeliveryPlansList = (data: TGetDeliveryPlansListProps) => http({
  url: `/blockingTool/find${qs.stringify(data, { addQueryPrefix: true })}`,
})

export const getDeliveryPlansById = (data: {id: number}) => http({
  url: `/blockingTool/${data.id}`,
  data
})

export const saveDeliveryPlans = (data: TDeliveryPlansDrawerForm) => http({
  url: '/blockingTool/save',
  data
})




