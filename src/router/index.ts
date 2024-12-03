import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { capitalizeFirstLetter } from "@/util"

export enum ERouterName {
  Login = 'login',
  Dashboard = 'dashboard',
  Report = 'report',
  Media = 'media',
  NewAd = 'newAd',
  Template = 'template',
  Flow = 'flow',
  DeliveryPlans = 'deliveryPlans',
  DSP = 'dsp',
  Supplier = 'supplier',
  Log = 'log',
  BlockingTools = 'blockingTools'
}

export const routerMapFlat: Record<ERouterName, {
  routerName: string
  cnName: string
}> = {
  [ERouterName.Login]: {
    routerName: 'login',
    cnName: '登录'
  },
  [ERouterName.Dashboard]: {
    routerName: 'dashboard',
    cnName: '可视化大图'
  },
  [ERouterName.Report]: {
    routerName: 'report',
    cnName: '报表'
  },
  [ERouterName.Media]: {
    routerName: 'media',
    cnName: '媒体管理'
  },
  [ERouterName.NewAd]: {
    routerName: 'newAd',
    cnName: '新广告位管理'
  },
  [ERouterName.Template]: {
    routerName: 'template',
    cnName: '模版管理'
  },
  [ERouterName.Flow]: {
    routerName: 'flow',
    cnName: '流量包'
  },
  [ERouterName.DeliveryPlans]: {
    routerName: 'deliveryPlans',
    cnName: '投放计划'
  },
  [ERouterName.DSP]: {
    routerName: 'dsp',
    cnName: 'DSP管理'
  },
  [ERouterName.Supplier]: {
    routerName: 'supplier',
    cnName: '供应商管理'
  },
  [ERouterName.Log]: {
    routerName: 'log',
    cnName: '日志'
  },
  [ERouterName.BlockingTools]: {
    routerName: 'blockingTools',
    cnName: '屏蔽工具'
  }
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
        name: 'dashboard'
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
    }),
    {
      path: '/:catchAll(.*)',
      redirect: {
        name: 'dashboard'
      }
    }
  ]
})

export default router
