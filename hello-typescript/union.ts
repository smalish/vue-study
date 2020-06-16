/*
 * @Description: 联合类型
 * @Author: yangying01
 * @Date: 2020-06-12 16:48:58
 * @LastEditTime: 2020-06-12 16:59:13
 * @LastEditors: yangying01
 */ 

let value: number | string

//类
class PrintA{
    ptype = 'printA'
    printLandscape():void{
        console.log('printLandscape')
    }
}

class PrintB{
    ptype = 'printB'
    printSketch():void{
        console.log('printSketch')
    }
}

function doPrint(p: PrintA | PrintB): void{
    //判断实例
    if(p instanceof PrintA){
        p.printLandscape()
    }else{
        p.printSketch()
    }

    if(p.ptype == 'printA'){
        (p as PrintA).printLandscape()
    }else{
        (p as PrintB).printSketch()
    }
    
}

doPrint(new PrintA())