<template lang="pug">
  div
      Nav
      div.sfui-doc-container
          router-view
</template>

<script>
import Nav from './Nav'

export default {
  components: {
	Nav
  }
};
</script>

<style>
html,
body {
    overflow: scroll!important;
}
.sfui-doc-container {
    margin-top: 45px;
}
</style>
