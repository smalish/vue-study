<template>
    <div v-show="isShow" id="modalView" class="out_div" :class=customizeClassName>
        <div class="flex_div">

            <div class="modal_div ">
                <div class="modal_content onepxBorder">
                    <div class="modal_title" v-show="!hideTitle">{{title}}</div>
                    <!-- <span class="icon" :class="icon + '_icon'"></span> -->
                    <div class="message" v-html="message"></div>
                </div>
                <div v-if="operate.type == 2" class="modal_operates">
                    <div class="operate fail" :style="{color: operate.selectedColor}" @click="failEvent">{{operate.failName}}</div>
                    <div class="operate succ" :style="{color: operate.selectedColor}" @click="succEvent">{{operate.succName}}</div>

                </div>
                <div v-else class="modal_operates" @click="succEvent">
                    <span :style="{color: operate.selectedColor}">{{operate.succName}}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            isShow: false,
            icon: 'default',//一共有三种，default，表示默认icon；input,表示有输入框icon;fail,表示消极icon
            title: '提示',
            hideTitle: false,
            message:'',//提示文案
            customizeClassName: '', // 自定义样式名称
            // 操作
            operate:{
                type: 2,//1表示单个确定按钮；2表示两个并排按钮
                failName: '取消',
                succName: '确定',
                failFun: null, //取消回调
                succFun: null,//成功回调
                selectedColor: '',
            }

        }
    },
    methods: {
        // 确定
        succEvent: function(){
            let that = this

            // 关闭弹层
            that.closeModal()

            // 回调函数
            that.operate.succFun && that.operate.succFun()

        },
        // 取消
        failEvent: function(){
            let that = this

            // 关闭弹层
            that.closeModal()

            // 回调函数
            that.operate.failFun && that.operate.failFun()
        },
        // 关闭modal弹层
        closeModal: function(){
            let that = this

            that.isShow = false
        }
    }
}
</script>
<style lang="less" scoped>
    @import './modal.less';
</style>

