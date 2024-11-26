import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { capitalizeFirstLetter } from "@/util"

export enum ERouterName {
  Login = 'login',
  Dashbord = 'dashbord',
  Report = 'report',
  Media = 'media',
  NewAd = 'newAd',
  Template = 'template',
  Flow = 'flow',
  DeliveryPlans = 'deliveryPlans',
  DSP = 'dSP',
  Supplier = 'supplier',
  Log = 'log',
  BlockingTools = 'blockingTools'
}

const routerMap : Record<string, {
  path ?: string
  name ?: string
  children ?: string[]
}> = {
    [ERouterName.Login]: {},
    home: {
      path: '/',
      name: 'Home', // 路径名称
      children: Object.values(ERouterName).filter(value => value !== ERouterName.Login)
    }
  }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'dashbord'
      }
    },
    ...Object.entries(routerMap).map(([key, _]) => {
      const curRoute : RouteRecordRaw = {
        path: _.path || `/${key}`,
        component: () => import(`@/views/${capitalizeFirstLetter(key || _.name)}.vue`),
        children: []
      }
      if (!_.children) {
        curRoute.name = key
      } else {
        curRoute.children = _.children.map(child => ({
          path: child,
          name: child,
          component: () => import(`@/views/${capitalizeFirstLetter(child)}.vue`),
        }))
      }
      return curRoute
    })
  ]
})

export default router
