<template>
  <div class="home">
    <div @click="clickName">{{name}}</div>
    <!-- <HelloWorld msg="Hello ts"/> -->
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

    this.$modal({
      message: '2222'
    })

    // 自定义插件loading，this.$loading.show()

    console.log('clickName-----')
    that.name = '点击了'

    // let rand: number = Math.floor(Math.random() * 100 + 1) ;
    // this.$bus.emit("add" , rand) ;

    

  }

}
</script>
