<template>
  <div class="home">
    <div @click="clickName">{{name}}</div>
    <!-- <HelloWorld msg="Hello ts"/> -->
    <div class="icon"></div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component, Prop, PropSync, Emit } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

interface Person{
  name: string,
  age: number
}

@Component({
  components:{
    HelloWorld
  }
})
export default class Home extends Vue{

  name:string = 'yangying'

  mounted(){
    
	
  }
    

  clickName(): void{
    let that: any = this

    // 测试自定义插件$toast,在types/index.d.ts,有时写好.d.ts还是报错,可能是没有生效，可重启vscode
    // this.$toast({
    //   message: '1111'
    // })

    // 测试插件$modal，在index.d.ts,同样生效,不过需要加以下代码，否则Vue.use(toast)报错
    //------------------------------------------
    // interface MyToast {
    //   (options: LoadingOption): VueConstructor
    // }

    // export function install (vue: typeof Vue): void;

    // export const Toast: MyToast;
    //------------------------------------------

    // this.$modal({
    //   message: '2222'
    // })

    // 自定义插件loading，this.$loading.show(),注意新添加或者修改的ts文件未生效可重启vscode
    // this.$loading.show()

    console.log('clickName-----')
    that.name = '点击了'

    //第三方插件 vue-router, this.$router.push
    // this.$router.push('/about')
    // this.$router.push({
    //   path: '/about', 
    //   query:{a: '123'}
    // })

    //第三方插件 axios, this.$axios
    // 第三方插件 qs, this.$qs
    
    this.axios.post('/hhrstore/goods/getlist', this.$qs.stringify({page: 1})).then((resp: any) => {
            console.log(`res = ${resp.data}`)
        }).catch((e:any) => {
            console.log(e);
        })

    let p = {
      name: 'yy',
      age: 18
    }
    for(let key in p){
      console.log(p[key])
    }

    

  }

}
</script>

<style>
  .icon{
    width: 100px;
    height: 100px;
    background-image: url('~assets/logo.png');
    background-size: 100px 100px;
    background-repeat: no-repeat;
  }
</style>
