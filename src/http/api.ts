// 1、导入axios以及拦截器
import type { TGetDspListProps } from "@/type";
import service from ".";

const http = <T>(query: {
  url: string,
  method?: 'get' | 'post',
  data: T
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
  url: '/dsp/find',
  data
})
