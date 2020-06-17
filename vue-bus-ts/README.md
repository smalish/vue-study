# vue-bus

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 已有项目引入typescript

在已创建的项目中安装
```
vue add @vue/typescript
```
注入的 webpack-chain 规则
```
config.rule('ts')
config.rule('ts').use('ts-loader')
config.rule('ts').use('babel-loader') (当配合 @vue/cli-plugin-babel 使用时)
config.rule('ts').use('cache-loader')
config.plugin('fork-ts-checker')
```

### 常见问题 

* main.ts中
import App from './App' 改为 import App from './App.vue' 因为ts中默认的不是.vue文件而是.ts,所以.js也不能省略了

* 在webpack中配置别名, 在vue模板中@import报错，如 
```
//报错
@import url('@style/variable.less'); 
//修改为
@import url('~@style/variable.less');
//注意css文件别名需要前面加@，没有@会报错找不到
```
* ts文件中引入js文件报错：
在tsconfig.json中 "allowJs": true,

* 为自定义插件添加.d.ts

* 自定义插件定义为全局变量，this.$toast在组件中报错的问题
在插件添加.d.ts文件

* 第三方插件设置为全局变量，this.$axios、this.$router、this.$qs等在组件中报错问题

1. this.$router
引入vue-router就ok

2. this.$axios

方法一：

```
//main.ts
import axios from 'axios'

Vue.prototype.$axios = axios

//shims-vue.d.ts
import { AxiosStatic } from "axios";
//这里只是ts规范，main.ts还是要引入axios赋值给vue.prototype.$axios
declare module "vue/types/vue" {
  interface Vue {
    $axios: AxiosStatic;
  }
}
```

方法二：

```
import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios, axios)

<!-- 就可以使用this.axios.post... -->
```

3. this.$qs
提示：尝试 `npm install @types/qs` (如果存在)，或者添加一个包含 `declare module 'qs';` 的新声明(.d.ts)文件
```
(1)npm install @types/qs
(2)
//main.ts
import qs from 'qs'
Vue.prototype.$qs = qs

//shims-vue.d.ts
declare module "vue/types/vue" {
  interface Vue {
    $qs: any;
  }
}
```
但是此处any ts不报错，还是不太好，this.$qs.xxx方法名不会自动提示

* ts如何遍历对象？ obj[变量]报错问题
```
// tsconfig.js配置
"suppressImplicitAnyIndexErrors": true,//obj[key] 这样缺少索引签名的索引对象

```

* [ts配置可见](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html)



