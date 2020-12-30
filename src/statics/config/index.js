import { cssConfig } from './css/index.js'
import { jsConfig } from './js/index.js'
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
    }
  ]
}
