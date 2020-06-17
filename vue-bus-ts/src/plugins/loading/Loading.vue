<!--
 * @Author: Helijun
 * @LastEditors: yangying01
 * @Description: 页面加载loading
 * @Date: 2019-03-04 19:32:04
 * @LastEditTime: 2020-06-16 10:08:47
 -->

<template>
  <div class="page-loading" :class="{bg: isBg}" v-if="isShow" id="pageLoading">
    
    <div class="content">
      <!-- css写的loading -->
      <!-- <div class="circle">
        <div class="half left"></div>
        <div class="mask"></div>
      </div> -->

      <!-- 图片写的loading -->
      <div class="circle-image"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },

    // 是否需要显示背景
    isBg: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
@import url('~@style/variable.less');
// @import url('../../style/variable.less');
@text-color: #ffffff;
@loading-sub-color: #666666;
@loading-color: #FF4333;
@bg-color: rgba(0, 0, 0, .6);
@wrap-bg-color: rgba(0, 0, 0, .2);

.page-loading{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  &.bg {
    background-color: @wrap-bg-color;
  }
  .content {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      .flex();
      flex-direction: column;
      background-color: @bg-color;
      height: 180px;
      width: 180px;
      border-radius: 10px;
      .flex();
      font-size: 28px;
      @keyframes ringLoading {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      .circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        animation: ringLoading .8s linear infinite;
        &::before {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 90px;
          left: 45%;
          top: 0%;
          background-color: @loading-color;
        }
        .half {
          width: 50%;
          height: 100%;
          display: inline-block;         
        }
        .left {
          float: left;
          background-image: linear-gradient(180deg, @loading-color 0%, transparent 100%);
        }

        .mask {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 64px;
          height: 64px;
          transform: translate(-50%, -50%);
          background: @loading-sub-color;
          border-radius: 50%;
        }
      }

      .circle-image {      
        width: 100px;
        height: 100px;
        background-position: center center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url("https://static.rong360.com/upload/png/ac/b0/acb06d043f418aab00e318f9961c97d3.png");
        animation: ringLoading .8s linear infinite;
        @keyframes ringLoading {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
      }
    }
  .text{
    font-size: 30px;
    line-height: 42px;
    margin-top: 40px;
    color: @text-color;
    white-space: nowrap;
  }
}
</style>
