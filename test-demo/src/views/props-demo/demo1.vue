/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-07-21 11:25:04
 * @LastEditTime: 2020-07-21 11:25:05
 * @LastEditors: yangying01
 */ 
<template>
  <div class="demo1" @click="modifyProps">
    {{list}}
  </div>
</template>

<script>

export default {
  props: ['list'],
  // 阻止根节点继承attribute
  // inheritAttrs: false,
  data(){
    return{
      myList: Number
    }
  },
  methods:{
    modifyProps() {
      this.myList = [3]
    }
  }
  
}
</script>