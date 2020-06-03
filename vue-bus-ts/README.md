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

* ts文件中引入js文件报错：
在tsconfig.json中 "allowJs": true,

* 为自定义插件添加.d.ts

* 自定义插件定义为全局变量，this.$toast在组件中报错的问题

* 第三方插件设置为全局变量，this.axios、this.$router、this.$qs等在组件中报错问题

* ts如何遍历对象？ obj[变量]报错问题

* [ts配置可见](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html)



