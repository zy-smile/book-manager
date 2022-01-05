import { createRouter,createWebHistory } from "vue-router";
const routes = [
  {
    path: '/',
    redirect: '/login'
  },{
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName:login*/'../views/login/Login')
  },
  {
    path: '/home',
    component: () => import(/*webpackChunkName: home*/'../views/home/Home')
    ,children: [{
      path: '/bookshelf/:id',
      props: true,
      component: () => import(/*webpackChunkName: home*/'../views/book/bookshelf.vue')
    },{
      path: "/manager",
      component: () => import(/*webpackChunkName: home*/'../views/book/manager.vue')
    },{
      path: "/countdata",
      component: () => import(/*webpackChunkName: home*/'../views/book/countData.vue')
    },{
      path: "/settings",
      component: () => import(/*webpackChunkName: home*/'../views/book/settings.vue')
    }]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router