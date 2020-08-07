/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-07-21 11:24:45
 * @LastEditTime: 2020-07-21 11:24:45
 * @LastEditors: yangying01
 */ 
<template>
  <div class="home">
    {{list}}
    <Demo1 myname="yy" :list="list" />
  </div>
</template>

<script>
// @ is an alias to /src
import Demo1 from './demo1'

export default {
  data(){
    return{
      list: [1,2]
    }
  },
  components: {
    Demo1
  }
}
</script>

