import {createRouter,createWebHashHistory}  from 'vue-router'
import Home from '../module/Home.vue'
const routes=[
  {
    path:'/home',
    component:Home,
    children:[{
      path:'about',
      component:()=>import(/* webpackChunkName:'about'*/'../module/About.vue')
    },{
      path:'news',
      component:()=>import(/* webpackChunkName:'News'*/'../module/News.vue')
    }]
  },
  {
    path:'/',
    component:Home
  }
]

export default createRouter({
  routes,
  history:createWebHashHistory()
})