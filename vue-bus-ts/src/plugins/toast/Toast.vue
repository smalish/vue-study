<!--
 * @Description: 自定义toast插件
 * @Author: yangying01
 * @Date: 2020-05-31 19:28:57
 * @LastEditTime: 2020-05-31 23:23:26
 * @LastEditors: yangying01
--> 

<template>
    <div class="mask" v-show="isShow">
        <div class="content">{{message}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: false,
            message: '',
            complete: function(){}
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../../style/variable.less';
    

    .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
        .flex();
        .content{
            padding: 10px;
            background-color: rgba(0,0,0,0.6);
            border-radius: 10px;
            font-family: 'PingFang SC';
            font-size: 12px;
            line-height: 20px;
            color: #fff;
            text-align: center;
        }
    }
</style>
