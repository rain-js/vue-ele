import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import App from '../App'
import Home from 'components/home/home'
import Checkout from 'components/checkout/checkout'
import City from 'components/city/city'
import Forget from 'components/forget/forget'
import Login from 'components/login/login'
import Msite from 'components/msite/msite'
import Order from 'components/order/order'
import Profile from 'components/profile/profile'
import Search from 'components/search/search'
import Vipcard from 'components/vipcard/vipcard'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/home',
          component: Home //首页城市列表页
        },
        {
          path: '/checkout',
          component: Checkout // 确认订单页
        },
        {
          path: '/city/:cityId',
          component: City     // 当前选择城市页
        },
        {
          path: '/forget',
          component: Forget   // 修改密码页
        },
        {
          path: '/login',
          component: Login    // 登录注册页
        },
        {
          path: '/msite',
          component: Msite,   // 所有商铺列表页
          meta: {keepAlive: true}
        },
        {
          path: '/order',
          component: Order  // 订单列表页
        },
        {
          path: '/profile',
          component: Profile  // 个人信息页
        },
        {
          path: '/search/:geohash',
          component: Search // 搜索页
        },
        {
          path: '/vipcard',
          component: Vipcard  // vip卡页
        },
      ]
    }
  ]
})
