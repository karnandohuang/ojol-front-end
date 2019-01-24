import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'driver List',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/DriverList.vue')
    },
    {
      path: "/account",
      name : 'Account List',
      component: () => import('./views/AccountList.vue')
    },
    {
      path: "/account/info",
      name : 'Account Information',
      component: () => import('./views/MyAccount.vue')
    },
    {
      path: "/history",
      name : 'Booking History',
      component: () => import('./views/BookingHistory.vue')
    },
    {
      path: "/payments",
      name : 'Payment Methods',
      component: () => import('./views/Payments.vue')
    }
  ]
})
