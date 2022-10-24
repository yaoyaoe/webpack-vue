import {createRouter,createWebHashHistory}  from 'vue-router'
import Home from '../module/Home.vue'
import About from '../module/About.vue'

const routes=[
  {
    path:'/home',
    component:Home,
    children:[{
      path:'about',
      component:About
    }]
  },
  {
    path:'/',
    component:Home,
    children:[{
      path:'/about',
      component:About
    }]
  }
]

export default createRouter({
  routes,
  history:createWebHashHistory()
})