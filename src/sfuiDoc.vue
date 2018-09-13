<template lang="pug">
  div(:class="p()")
    sfui-doc-header(:config="config.header")
    div(:class="p('container')")
        div(:class="p('left')")
            sfui-doc-nav(:config="config.nav")
        div(:class="p('center')")
            sfui-doc-container
                slot
        div(:class="p('right')")
            sfui-doc-mobile(v-if="mobile" :src="mobile")
</template>

<script>
export default {
  name: 'sfui-doc',

  props: {
    config: {
      type: Object,
      required: true
    },
    mobile: String
  }
};
</script>

<style lang="stylus">
@import './style/reset.css'
@import './style/variable.styl'
@import '../node_modules/highlight.js/styles/default.css'

.sfui-doc
  &__container
    width 100%
    position relative
    height 'calc(100vh - %s)' % $h-header_top
  &__left
    position absolute
    left 0
    top 0
    height 100%
    width $w-nav
    overflow scroll
  &__center
    width auto
    margin 0 420px 0 $w-nav
    height 100%
    box-sizing border-box
    overflow scroll
    -webkit-overflow-scrolling touch
  &__right
    position absolute
    top 0
    right 0
    width 420px
    height 'calc(100vh - %s)' % $h-header_top
</style>
