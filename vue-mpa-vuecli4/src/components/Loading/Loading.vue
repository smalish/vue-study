<!--
 * @Author: Helijun
 * @LastEditors: yangying01
 * @Description: 页面加载loading
 * @Date: 2019-03-04 19:32:04
 * @LastEditTime: 2020-08-28 14:52:16
 -->

<template>
  <div class="page-loading" v-if="isShow" id="pageLoading">
    <div class="loading">
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
@import url('~@/styles/variable.less');
.page-loading{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  .flex();
  flex-direction: column;
  z-index: 9999;
  .loading{
    width: 80px;
    height: 80px;
    padding: 50px;
    background-color: rgba(0, 0, 0, .8);
    border-radius: 10px;
    // box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, .5);
    .circle{
      width: 60px;
      height: 60px;
      border-radius: 100%;
      background-color: transparent;
      border-top: 10px solid rgba(247,132,0,1);
      border-left: 10px solid rgba(247,132,0,1);
      border-right: 10px solid transparent;
      border-bottom: 10px solid transparent;
      position: relative;
      animation: rotate .8s infinite linear;
      @keyframes rotate{
        0%{
          transform: rotateZ(0deg);
        }
        50%{
          transform: rotateZ(180deg);
        }
        100%{
          transform: rotateZ(360deg);
        }
      }
    }    
  }
  .text{
    font-size: 30px;
    line-height: 42px;
    margin-top: 40px;
    color: @color-title-black;
    white-space: nowrap;
  }
}
</style>
