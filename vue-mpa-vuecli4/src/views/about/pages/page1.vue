<template>
  <div>page 1111111111111111</div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted() {
    // 请求
    this.axios.get('/api/getlunbo')
      .then((res) => {
          console.log(res)
      })

  }
}
</script>