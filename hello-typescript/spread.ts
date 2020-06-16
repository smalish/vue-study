/*
 * @Description: 扩展运算符
 * @Author: yangying01
 * @Date: 2020-06-15 19:09:13
 * @LastEditTime: 2020-06-15 20:11:41
 * @LastEditors: yangying01
 */ 

function add(x:number, y:number, z:number):number{
    console.log(x + y + z)
    return x + y + z
}

let args:[number,number,number] = [1,2,3]
add.apply(this, args)

add.call(this, ...args)

function add1(...x:number[]): void{
    console.log(x)
}

add1(2,3,4)


// 解构
let [m, ...n] = [1,2,3,4,5,6]
console.log(`m=${m}; n=${n}`)
// let {x, ...rest:any} = {name: 'yy', age: 18, x: 1}
// console.log(`x=${x}; rest=${rest}`)
