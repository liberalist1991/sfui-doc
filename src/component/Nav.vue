<template lang="pug">
  div(:class="p()")
    div(:class="p('split')" v-for="(item, index) in config" )
      sfui-doc-nav-item(:item="item")
      div(:class="p('item')" v-if="item.children" v-for="(navItem, index) in item.children")
        sfui-doc-nav-item(:item="navItem")
      div(:class="p('group')" v-if="item.groups" v-for="(group, index) in item.groups" ) {{ group.name }}
        div(:class="p('subitem')" v-for="(navItem, index) in group.children" )
          sfui-doc-nav-item(:item="navItem")
</template>

<script>
import NavItem from './NavItem.vue';

export default {
  name: 'sfui-doc-nav',

  components: {
    'sfui-doc-nav-item': NavItem
  },

  props: {
    config: Array
  }
};
</script>

<style scoped lang="stylus">
@import '../style/variable.styl'

.sfui-doc-nav
  padding 20px 0 0 $padding
  height 100%
  overflow-y scroll
  border-right 1px solid $c-border
  z-index 1
  &__split,
  &__subitem
    a
      display block
      padding 10px 0
      color $c-text
      font-size 16px
      line-height 24px
      &.active,
      &:hover
        color $c-text_hover
  &__split
    > a
      font-weight bold
  &__item
    padding-left $pad-nav_item
  &__subitem
    a
      padding-left $pad-nav_subitem
      font-size 14px
  &__group
    font-size 12px
    line-height 40px
    color $c-light
</style>
