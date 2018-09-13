<template lang="pug">
    div(:class="['sfui-doc-container', `sfui-doc-container--${cur}`]")
      slot
</template>

<script>
export default {
  name: 'sfui-doc-container',

  computed: {
    cur() {
      const {
        path
      } = this.$route;
      if (path) {
        return path.split('/').slice(-1)[0];
      }
      return this.$route.name;
    }
  }
};
</script>

<style lang="stylus">

.sfui-doc-container
  overflow scroll
  padding 20px
  position relative
  line-height 1.5
  font-size 14px
  section
    padding 10px 0
    > h1,
    > h2,
    > h3,
    > h4,
    > h5,
    > h6
      margin 10px 0
      line-height 1.5
      font-weight normal
      color $c-text
    > h1
      font-size 36px
    > h2
      font-size 30px
    > h3
      font-size 24px
    > h4
      font-size 18px
    > h5,
    > h6
      font-size 12px
    > p
      margin 15px 0
      font-size 14px
      line-height 26px
      color $c-text
    > ul,
    > ol
      padding 15px 0
      background-color #f5f7fa
    > ul li,
    > ol li
      color $c-text
      font-size 14px
      line-height 22px
      margin 5px 0 5px 20px
      padding-left 15px
      position relative
      &::before
        content ''
        position absolute
        top 0
        left 0
        width 6px
        height 6px
        margin-top 8px
        border-radius 50%
        box-sizing border-box
        border 1px solid $c-grey
      li
        margin-left 0
    > hr
      border 0px none
      border-top 1px solid #eee
    p > code,
    li > code,
    table code
      margin 2px
      padding 2px 7px
      display inline
  blockquote
    padding 16px
    margin 20px 0
    font-size 14px
    border-radius 4px
    background-color #ecf9ff
    color rgba(52, 73, 94, .8)
    border-left 5px solid #50bfff
  table
    width 100%
    font-size 13px
    line-height 1.5
    margin-bottom 45px
    background-color #fff
    border-collapse collapse
    color $c-text
    th
      padding 8px 10px
      text-align left
      font-weight normal
      background-color #f5f7fa
      border 1px solid $c-border
      &first-child
        padding-left 10px
    td
      padding 8px
      border 1px solid $c-border
  code
    display block
    font-size 14px
    padding 0 8px
    line-height 1.5
    border-radius 3px
    margin-bottom 25px
    word-break break-all
    white-space pre-wrap
    background-color #fafafa
    padding 18px 10px 18px 20px
</style>
