<template>
  <div class="app">
    {{title}}
    <!-- <router-link to="/about">关于</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'APP',
  props: {

  },
  components:{
  },
  data() {
    return {
      title:'my title watch'
    }
  },
  methods:{

  },
  mounted() {

  },
 }
</script>

<style lang="less" scoped>
.app{
  // background-color: pink;
}
</style>