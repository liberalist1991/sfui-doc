<template lang="pug">
  div(:class="p()")
    sfui-doc-header(:config="config.header")
    div(:class="p('container')")
        div(:class="p('left')")
            sfui-doc-nav(:config="config.nav")
        div(:class="[p('center'), {hasMobile: mobile}]")
            sfui-doc-container
                slot
        div(:class="p('right')" v-if="mobile")
            sfui-doc-mobile(:src="mobile" :hasQrcode="hasQrcode")
</template>

<script>
export default {
  name: 'sfui-doc',

  props: {
    config: {
      type: Object,
      required: true
    },
    mobile: String,
    hasQrcode: Boolean
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
    margin-left $w-nav
    height 100%
    box-sizing border-box
    overflow scroll
    -webkit-overflow-scrolling touch
    &.hasMobile
        margin-right 420px

  &__right
    position absolute
    top 0
    right 0
    width 420px
    height 'calc(100vh - %s)' % $h-header_top
</style>
