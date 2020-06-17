<template>
  <div class="about">
    <h1>This is an about page</h1>
    <VueUeditorWrap v-model="msg" :config="myConfig"></VueUeditorWrap>

  </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
  data () {
    return {
      msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
      myConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 240,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: 'http://35.201.165.105:8000/controller.php',
        UEDITOR_HOME_URL : "/UEditor/"
      }
    }
  },
  components: {
      VueUeditorWrap
  }
}
</script>
