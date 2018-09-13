<template lang="pug">
  div(:class="p()")
    header(:class="p('top')")
      a(:class="p('top-logo')" :href="config.logo.href")
        <img :src="config.logo.image" />
        span {{ config.logo.title }}

      ul(:class="p('top-nav')")
        li(v-for="(value, key) in config.nav" :class="p('top-nav-item')")
          a(:href="value || 'javascript:;'" :class="p('top-nav-title')") {{ key }}
</template>

<script>
export default {
  name: 'sfui-doc-header',

  props: {
    config: Object
  }
};
</script>

<style lang="stylus" >
@import '../style/variable.styl'

.sfui-doc-header
  width 100%
  background-color #fff
  border-bottom 1px solid $c-border
  &__top
    display flex
    align-items center
    padding 0 $padding
    height $h-header_top
    line-height $h-header_top
    &-logo
      img,
      span
        display inline-block
        vertical-align middle
      img
        width 60px
        margin-left -15px
      span
        font-size 26px
        font-weight bold
        color $c-black
    &-nav
      flex 1
      li
        float right
        position relative
        vertical-align middle
      &-item
        margin 0 15px
      &-title
        display block
        font-size 15px
        color $c-text
        border-bottom 1px solid transparent
        &:hover
            color $c-text_hover
            border-bottom-color #dc3b2b

</style>
