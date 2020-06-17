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



### 自定义插件的实现过程

* 通过vue带有的自定义插件的模式功能，定义对应的install方法，该方法接收两个参数，第一个是Vue的构造器，第二个参数是：可选的optinos对象
* 通过import引入到main.js中，通过Vue.use(your plugin)的方式使用
* 在所有vue的组件中，可以通过this.$yourPlugin的方式直接访问插件

```
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```

插件的本质是定义一个install方法，因为Vue.use(Plugin)时会去取Plugin.install方法执行
如何即使用this.$toast()又调用方法 this.$toast.hideToast()？
就是需要定义的Vue.prototype.$toast = 变量
该变量既是一个函数，又有方法属性,例如：
js函数本身就是一个函数也可以当做对象使用，因为js一切都是对象,每个function本身是Function的实例,也就是说function的原型指向Function.prototype，而Function的原型指向的是Object.prototype, unction instanceof Object ==> true

var a = function(){
}
a.hi = function(){console.log('hi')}

a()
a.hi()


参考资料：[vue开发自定义插件(组件)](https://mp.weixin.qq.com/s?__biz=Mzg5OTE5NDEzMA==&mid=2247483686&idx=1&sn=c5f1f112ac0b939f628417f6870a1d54&scene=21#wechat_redirect)