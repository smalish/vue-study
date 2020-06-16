/*
 * @Description: 数组
 * @Author: yangying01
 * @Date: 2020-06-03 11:53:01
 * @LastEditTime: 2020-06-09 20:01:08
 * @LastEditors: yangying01
 */ 

 let arr1: number[] = [1,2,3]

 let arrw: Array<number>= [1,2,3]

//  复杂的数组
interface User{
    name: string,
    age: number
}

let userList:User[] = [{
    name: 'yy',
    age: 18
}]

interface Arr{
    [index: number] : string
}

let arr:Arr = ['aaa', 'bbb']
// arr.length //error 没有length
// arr.join(',') //error  也没有数组的方法

interface Arr2{
    [index:number]: string
    length: number
    join(s:any): void
}
let arr3:Arr2 = ['aaa', 'bbb']
console.log(arr3.length) //可以使用，也可以去到正确的长度
console.log(arr3.join(',')) //正确输出



 interface Obj{
     [index: string]: string
 }

 let per1:Obj = {
     name: 'yyy'
 }

//  复杂的嵌套结构
interface Tree{
    tag: string
    children?:{
        [index:number]: Tree
    }
}

let tree: Tree = {
    tag: 'div',
    children: [{
                tag: 'span',
                children: []
            },{
                tag: 'span',
                children: []
            }]
        
    
}