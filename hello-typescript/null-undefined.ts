/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-06-11 15:32:18
 * @LastEditTime: 2020-06-12 16:57:35
 * @LastEditors: yangying01
 */ 

function show(value: number | undefined | null):void{
    if(value === undefined){
        console.log('value is undefined')
    }else if(value === null){
        console.log('value is null')
    }else{
        console.log('value is number')
    }
}

show(10)
show(undefined)
show(null)

// "strictNullChecks": true, null和undefined不能赋值给number

function splitInHalf(str: string | null): string{
    return str!.substring(0, str!.length/2) // 加感叹号表示str不为空
}

//never
// 没有返回值，1.无限循环，代码不可到达；2.抛出异常
// 是很多类型的子类型，number string不能给never

//void
function showTrueFalse(x: string | boolean): void{
    if(typeof x === 'string'){
        console.log('string:' + x)
    }else if(typeof x === 'boolean'){
        console.log('boolean:' + x)
    }else{
        checkEXhaustiveness(x)
    }
}

function checkEXhaustiveness(x:never):never{
    throw new Error('TYPE ERROT:::')
}

showTrueFalse('H')
showTrueFalse(true)
// showTrueFalse(123) //throw new Error('TYPE ERROT:::');
