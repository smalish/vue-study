<template>
  <div id="app">
    <!-- about page
    <div class="pic"></div>
    <HelloWorld /> -->

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath" />
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive" :key="$route.fullPath" />

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return {

    }
  },
  components:{
    // 引入公共组件
    HelloWorld
  },
  mounted() {

    // 使用公共插件
    this.$toast({ message: '提示文案', icon: 'fail' })
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .pic{
    width: 100%;
    height: 100px;
    background: url('../../assets/logo.png');
  }
}
</style>
