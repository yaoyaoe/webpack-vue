<template>
  <div class="">
    我是首页
    <img src="../assets/images/manage.png" alt="zz"/>
    <el-button type="primary" @click="toggleDark">暗黑模式</el-button>
    <el-input v-model="input" placeholder="Please input" />
    <router-link to="/home/news">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { useDark } from '@vueuse/core'
import {  useToggle } from '@vueuse/shared'
import {getLastMonthDay} from '../utils/common.js'

export default {
  name: 'Home',
  components:{
  },
  data() {
    return {
      src:''
    }
  },
  methods:{
    toggleDark(){
      const isDark = useDark()
      const toggleDark = useToggle(isDark)
      toggleDark()
      this.dynamicImport()
    },
    dynamicImport(){
       console.log(getLastMonthDay())
      // import('../utils/common.js').then(({getLastMonthDay})=>{
      //   // console.log(module)
      //   console.log(getLastMonthDay())
      //   // return module
      // })
    }

  },
  created(){
    // import('../utils/common.js').then(module=>{
    //   console.log(module)
    //   return module
    // })
    // (window.localStorage.getItem('vueuse-color-scheme')==='dark')&&this.toggleDark()
  },
  mounted() {
    this.$nextTick().then(()=>{
      if(window.localStorage.getItem('vueuse-color-scheme')==='dark'){
        window.localStorage.getItem('vueuse-color-scheme')==='auto'
        this.toggleDark()
      }
    })

  },
 }
</script>

<style lang="less" scoped>
</style>