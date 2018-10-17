<template lang="pug">
div.code-area
	span.download-btn(@click="onDownload") 下载
	span.copy-btn(v-clipboard:copy="code"
		v-clipboard:success="onCopy") 复制
	pre(ref="highlightCode")
		code {{code}}
</template>

<script>
/*
 ** 展示源码
 */
const FileSaver = require('file-saver');

export default {
  name: 'sfui-doc-code',
  props: {
    code: String, // 传值则显示对应源码
    saveAs: {
        type: String,
        default: 'code.txt'
    }
  },
  methods: {
    onCopy(e) {
      alert('已复制！')
    },

    onDownload() {
      var file = new File([this.code], this.saveAs, {
        type: "text/plain;charset=utf-8"
      });
      FileSaver.saveAs(file);
    }
  },
  mounted() {
    if (!!this.code) {
      hljs.highlightBlock(this.$refs.highlightCode);
    }
  }
};
</script>

<style lang="stylus" scoped>
.code-area
    position relative
.copy-btn,
.download-btn
    position absolute
    top 0
    right 0
    display block
    padding 10px
    background #ecf1ea
    color #67645c
    font-weight bold
    cursor pointer
.download-btn
    right 60px
.hljs
    padding 0
    background #fff
</style>
