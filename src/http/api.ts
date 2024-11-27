// 1、导入axios以及拦截器
import service from ".";

const http = <T>(query: {
  url: string,
  method: 'get' | 'post',
  data: T
}) => {
  return service(query).then(res => ({
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
}) => {
  return http({
    url: '/blockingTool/find',
    method: 'get',
    data
  })
}

// demo接口1
export const userLogin = (data: any) => {
  return service({
    url: '/user/user/login',
    method: 'post',
    data
  })
}

// demo接口2
export const sendCode = (data: any) => {
  return service({
    url: '/user/user/sendCode/' + data,
    method: 'post'
  })
}

// demo接口2
export const getOrderNo = (data: any) => {
  return service({
    url: 'https://www.shenmazong.com/alipay/getOrderNo',
    method: 'get'
  })
}
