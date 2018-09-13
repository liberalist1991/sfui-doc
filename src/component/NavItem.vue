<template lang="pug">
  router-link(v-if="item.path" :to="item.path") {{item.title || item.name}}
  a(v-else-if="item.link" :href="item.link") {{item.title || item.name}}
  a(v-else) {{item.title || item.name}}
</template>

<script>
export default {
  name: 'sfui-doc-nav-item',

  props: {
    item: Object
  }
};
</script>
