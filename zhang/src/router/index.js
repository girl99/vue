import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/index/index'
import Classify from '../components/classify/classify'
import Shopcart from '../components/shopcart/shopcart'
import Mine from '../components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
