<template lang="pug">
div.app
	sfui-doc(
		:config="config"
		:mobile="mobile")
		router-view
</template>

<script>
import docConfig from '../doc.config';

export default {
  data() {
    return {
      mobile: `mobile.html${location.hash}`
    };
  },

  computed: {
    config() {
      return docConfig;
    },
  }
};
</script>

<style>
</style>
