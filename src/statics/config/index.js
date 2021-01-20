import { cssConfig } from './css/index.js'
import { jsConfig } from './js/index.js'
import { networkResource } from './networkResource/networkResource.js'

export const config = {
  menus: [
    {
      id: 0,
      name: 'CSS',
      path: '/',
      code: '0000',
      icon: 'el-icon-location',
      children: cssConfig
    },
    {
      id: 1,
      name: 'javascript',
      path: '/',
      code: '0001',
      icon: 'el-icon-location',
      children: jsConfig
    },
    {
      id: 2,
      name: '网络资料',
      path: '/',
      code: '0002',
      icon: 'el-icon-location',
      children: networkResource
    }
  ]
}
