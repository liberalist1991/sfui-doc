<template lang="pug">
div.sfui-doc-mobile
	div.sfui-doc-mobile__nav
		span.sfui-doc-mobile__nav--url {{url}}
		Qrcode.sfui-doc-mobile__nav--qrcode(:value="qrcodePath" v-if="hasQrcode")
	iframe(ref="iframe" :src="src" frameborder="0")
</template>

<script>
import VueQrcode from '@xkeshi/vue-qrcode';

export default {
  name: 'sfui-doc-mobile',

  data() {
    return {
      url: this.src
    }
  },

  props: {
    src: String,
    hasQrcode: Boolean
  },

  watch: {
    $route(to) {
      this.url = this.src.replace(/\#.*$/, `#${to.path}`);
    }
  },

  computed: {
    qrcodePath() {
      if (/^http|^\/\//.test(this.url)) {
        return this.url;
      } else {
        return location.protocol + '//' + (location.host + location.pathname).replace(/\/$|\/[^\/]+$/, /^\//.test(this.url) ? this.url : '/' + this.url);
      }
    }
  },

  components: {
    Qrcode: VueQrcode
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
  border 1px solid rgba(0, 0, 0, 0.08)
  iframe
    display block
    width 100%
    height 580px
  &__nav
    display flex
    height 60px
    background #e5e5e5
    border-radius 6px 6px 0 0
    line-height 60px
    font-size 16px
    &--qrcode
        width 60px
    &--url
        flex 1
        text-align center

</style>
