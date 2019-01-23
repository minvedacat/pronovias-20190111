import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
// import Login from './views/Login.vue'
// import Product from './views/Product.vue'
// import ProductList from './views/ProductList.vue'
// import PhotoUpload from './views/PhotoUpload.vue'
// import Result from './views/Result.vue'

Vue.use(Router)

// function checkLogin (to, from, next) {
//   if (!store.state.login || !store.state.account.phone || !store.state.login.data.token) {
//     next('/login')
//   }
//   next()
// }

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // },
    {
      path: '/appointment',
      name: 'appointment',
      component: () => import(/* webpackChunkName: "appointment" */ './views/Appointment.vue')
      // beforeEnter: checkLogin
    },
    {
      path: '/product/:id',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "product" */ './views/Product.vue')
    },
    {
      path: '/product',
      name: 'productlist',
      component: () => import(/* webpackChunkName: "productlist" */ './views/ProductList.vue')
    }
    // {
    //   path: '/upload',
    //   name: 'photoupload',
    //   component: () => import(/* webpackChunkName: "photoupload" */ './views/PhotoUpload.vue'),
    //   beforeEnter: checkLogin
    // },
    // {
    //   path: '/result/:id',
    //   name: 'result',
    //   component: () => import(/* webpackChunkName: "result" */ './views/Result.vue')
    // }
  ]
})
router.beforeEach((to, from, next) => {
  if (!store.state.app.homeVisted) {
    store.commit('homeVisit', true)
    next({ path: '/' })
  }
  next()
})

export default router
