// 1、导入axios以及拦截器
import type { TDspDrawerForm, TGetDspListProps, TGetMediaListProps, TMediaDrawerForm, TRequestTableBase } from "@/type";
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

export const getSupplierList = (data: TRequestTableBase) => http({
  url: `/supplier/find${qs.stringify(data, { addQueryPrefix: true })}`,
  data
})
