<template lang="pug">
  div.sfui-doc-mobile
    div.sfui-doc-mobile__nav
      span {{url}}
    iframe(ref="iframe" :src="src" frameborder="0")
</template>

<script>
export default {
  name: 'sfui-doc-mobile',

  data() {
      return {
          url: this.src
      }
  },

  props: {
    src: String
  },

  watch: {
    $route(to) {
        this.url = this.src.replace(/\#.*$/, `#${to.path}`)
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../style/variable.styl'

.sfui-doc-mobile
  width $w-mobile
  min-width $w-mobile
  margin 40px 0 0 20px
  border-radius 6px
  background #fafafa
  box-sizing border-box
  box-shadow rgba(0, 0, 0, 0.2) 0px 1px 4px, rgba(0, 0, 0, 0.2) 0px 1px 2px
  iframe
    display block
    width 100%
    height 580px
  &__nav
    height 60px
    background #e5e5e5
    border-radius 6px 6px 0 0
    text-align center
    line-height 60px
    font-size 16px
</style>
