<template>
  <div id="app">
    index page 111
    <HelloWorld />
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
  components: {
    HelloWorld
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
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
