/*
 * @Description: 装饰器
 * @Author: yangying01
 * @Date: 2020-06-18 14:02:03
 * @LastEditTime: 2020-06-19 10:14:36
 * @LastEditors: yangying01
 */ 

// --------------------------------- 普通类装饰器 ---------------------
// function logClass(params: any){
//     console.log(params)

//     // 添加类属性
//     params.prototype.mainUrl = 'http://www.baidu.com'

//     // 添加类方法
//     params.prototype.getMainUrl = () => {
//         console.log('getMainUrl function')
//     }
// }

// @logClass
// class HttpClient{
//     constructor(){
       
//     }

//     get(){
//         console.log('get function')
//     }
// }

// var http:any = new HttpClient()
// http.get()
// console.log(http.mainUrl)
// http.getMainUrl()


// --------------------------------- 带参数的类装饰器（又名：工厂装饰器） ---------------------
// function logClass(params: string){
//     console.log(params)
//     return function(target: any){
//         // 添加类属性
//         target.prototype.mainUrl = params

//         // 添加类方法
//         target.prototype.getMainUrl = () => {
//             console.log('getMainUrl function')
//         }
//     }
    
// }

// @logClass('http://www.zhihu.com')
// class HttpClient{
//     constructor(){
       
//     }

//     get(){
//         console.log('get function')
//     }
// }

// var http:any = new HttpClient()
// http.get()
// console.log(http.mainUrl)
// http.getMainUrl()


// --------------------------------- 类的装饰器重载类的构造函数和方法 ---------------------
// function logClass(target: any){
//     console.log(target)
//     return class extends target{
//         // 重载类属性，必需重写
//         mainUrl = '修改后的mainUrl'

//         // 重载get方法，必需重写
//         get = () => {
//             console.log('修改后的get function')
//         }

//         // 新增方法
//         getMainUrl = () => {
//             console.log('新增的getMainUrl function')
//         }
//     }
    
// }

// @logClass
// class HttpClient{
//     mainUrl:string = 'mainUrl'
//     constructor(){
       
//     }

//     get(){
//         console.log('get function')
//     }
// }

// var http:any = new HttpClient()
// http.get()
// console.log(http.mainUrl)
// http.getMainUrl()

// --------------------------------- 类的属性装饰器重载类的构造函数和方法 ---------------------
// 类装饰器
// function logClass(target: any){
//     console.log(target)
//     return class extends target{
//         // 重载类属性，必需重写
//         mainUrl = '修改后的mainUrl'

//         // 重载get方法，必需重写
//         get = () => {
//             console.log('修改后的get function')
//         }

//         // 新增方法
//         getMainUrl = () => {
//             console.log('新增的getMainUrl function')
//         }
//     }
    
// }

// // 属性装饰器
// function logProperty(params: any){
//     // console.log(params)
//     return function(target: any, attr: any){
//         console.log(target)
//         // console.log(attr)
//         // console.log(target[attr])
//         target[attr] = params
//     }
// }

// // @logClass
// class HttpClient{
//     @logProperty('修改后属性值')
//     public url: string | undefined
    
//     constructor(){
       
//     }

//     get(){
//         console.log('get mainUrl: ' + this.url)
//     }
// }

// var http:any = new HttpClient()
// http.get()


// --------------------------------- 类的方法装饰器重载类的构造函数和方法 ---------------------

// // 方法装饰器
// function logMethod(params: any){
//     console.log(params)
//     return function(target: any, methodName: string, desc: any){
//         console.log(target)
//         // console.log(methodName)
//         // console.log(desc)
//         // desc =    { value: [Function],
//         //             writable: true,
//         //             enumerable: true,
//         //             configurable: true 
//         //         }
//         let oldget = target[methodName]

//         desc.value = function() {//普通函数this指的是调用它的对象，箭头函数this指的是定义时上线文this值,此处用箭头函数会报错
//             console.log(this)
//             console.log('新的get方法')
//             oldget.apply(this, null)
//             // oldget.call(this)
//         }
        
//     }
// }

// // @logClass
// class HttpClient{
//     // @logProperty('修改后属性值')
//     public url: string | undefined = 'http://www.zhihu.com'
    
//     constructor(){
       
//     }

//     @logMethod('mmm')
//     get(){
//         console.log(this)
//         console.log('get url: ' + this.url)
//     }
// }

// var http:any = new HttpClient()
// http.get()


// --------------------------------- 类的方法参数装饰器重载类的构造函数和方法 ---------------------

// // 方法参数装饰器
// function logParam(params: any){
//     console.log(params)
//     return function(target: any, methodName: string, paramIndex: number){
//         console.log(target)
//         console.log(methodName)
//         console.log(paramIndex)
        
//     }
// }

// // @logClass
// class HttpClient{
//     // @logProperty('修改后属性值')
//     public url: string | undefined = 'http://www.zhihu.com'
    
//     constructor(){
       
//     }

//     get(@logParam('xxx') url: string){
//         this.url = url
//         console.log('get url: ' + this.url)
//     }

    
// }

// var http:any = new HttpClient()
// http.get('htt://baidu.com')


// --------------------------------- 装饰器执行顺序 ---------------------


// function logClass1(params:string){
//     return function(target:any){
//       console.log('类装饰器1')
//     }
// }

// function logClass2(params:string){
//     return function(target:any){
//       console.log('类装饰器2')
//     }
// }

// function logAttribute1(params?:string){
//     return function(target:any,attrName:any){
//       console.log('属性装饰器1')
//     }
// }

// function logAttribute2(params?:string){
//     return function(target:any,attrName:any){
//       console.log('属性装饰器2')
//     }
// }

// function logMethod1(params?:string){
//     return function(target:any,attrName:any,desc:any){
//       console.log('方法装饰器1')
//     }
// }
// function logMethod2(params?:string){
//     return function(target:any,attrName:any,desc:any){
//       console.log('方法装饰器2')
//     }
// }



// function logParams1(params?:string){
//     return function(target:any,attrName:any,desc:any){
//       console.log('方法参数装饰器1')
//     }
// }

// function logParams2(params?:string){
//     return function(target:any,attrName:any,desc:any){
//       console.log('方法参数装饰器2')
//     }
// }



// @logClass1('http://www.loaderman.com/api')
// @logClass2('xxxx')
// class HttpClient{
//     @logAttribute1()
//     @logAttribute2()
//     public apiUrl:string | undefined;
//     constructor(){
//     }

//     @logMethod1()
//     getData(){
//         return true;
//     }

//     // @logMethod2()
//     setData(@logParams1() attr1:any,@logParams2() attr2:any,){

//     }
// }

// var http:any=new HttpClient();

// 执行顺序:属性>方法>方法参数>类，同类装饰器执行自下向上

// 属性装饰器2
// 属性装饰器1
// 方法装饰器1
// 方法参数装饰器2
// 方法参数装饰器1
// 类装饰器2
// 类装饰器1


