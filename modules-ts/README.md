<!--
 * @Description: 模块化
 * @Author: yangying01
 * @Date: 2020-06-19 13:12:57
 * @LastEditTime: 2020-06-19 13:41:22
 * @LastEditors: yangying01
--> 

1. 写法一
```
<!-- 输出 -->
export a ...

export b ...

<!-- 引入 -->
import {a, b} from 'XXX'
import * as m from 'XXX' //m.a, m.b
```

2. 写法二

```
<!-- 输出 -->
export default a ...

export b ...

<!-- 引入 -->
import a,{b} from 'XXX'
```

#### 概念

从ECMAScript 2015开始，JavaScript引入了模块的概念。TypeScript也沿用这个概念。

两个模块之间的关系是通过在文件级别上使用imports和exports建立的。

大家最熟知的JavaScript模块加载器是服务于Node.js的 CommonJS和服务于Web应用的Require.js。

每个模块都可以有一个default导出。

#### CommonJS和AMD

根据编译时指定的模块目标参数，编译器会生成相应的供Node.js (CommonJS)，Require.js (AMD)，UMD，SystemJS或ECMAScript 2015 native modules (ES6)模块加载系统使用的代码。
