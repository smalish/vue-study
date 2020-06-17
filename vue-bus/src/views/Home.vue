<template>
  <div class="home">
    <h3 @click="clickName">showToast</h3>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    this.$toast({
      message: '提示文案啦啦啦',
      complete: () => {
        console.log('complete---')
      }
    })

    this.$toast.myhide()
    
  },
  methods: {
    clickName(){
      console.log('clickName:::')
      // this.$bus.emit('add', () => {
      //   console.log('emit add :::')
      // })

      

    


    }
  }
}
</script>
