<template>
  <div class="" @click="goto">
    我是关于页2
    <router-link to="/home/news">新闻</router-link>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {

  },
  components:{
  },
  data() {
    return {

    }
  },
  methods:{
    goto(){
      this.$router.push('/home/news')
    }
  },
  mounted() {

  },
 }
</script>

<style lang="less" scoped>
</style>