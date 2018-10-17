<template lang="pug">
div
	div.menu-header
		span.menu-btn(@click="showSide") menu
		span.menu-goForward(@click="goForward" v-if="hasHistory") >
		span.menu-goback(@click="goBack" v-if="hasHistory") <
	transition(name="fade" @touchmove.stop.prevent)
		div.menu-mask(v-show="isShow" @click="hideSide")
	transition(name="slide-fade")
		div.side-content(v-show="isShow")
			slie-nav(:config="config")
</template>

<script>
import {
  Nav
} from 'sfui-doc'
import docConfig from '../doc.config';

export default {
  name: 'sfui-doc-nav',

  data() {
    return {
      isShow: false,
      hasHistory: false,
      config: docConfig.nav
    }
  },
  components: {
    SlieNav: Nav
  },
  watch: {
    $route() {
      this.hasHistory = history.length > 1
    }
  },

  methods: { 
    hideSide() { 
      this.isShow = !this.isShow
    },
    showSide() { 
      this.isShow = !this.isShow
    },
    goBack() {
      history.back()
    },
    goForward() {
      history.forward()
    }
  }
};
</script>

<style>
.sfui-doc-nav__split a,
.sfui-doc-nav__subitem a {
    padding: 5px 0 !important;
}
</style>

<style scoped lang="stylus">
.menu-header {
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 45px;
	border-bottom: 1px solid #d8d8d8;
	background: #fff;
	z-index: 2;
}

.menu-btn,
.menu-goback,
.menu-goForward {
	position: absolute;
	display: block;
	margin: 5px 0 0 10px;
    width: 35px;
    height: 35px;
    cursor: pointer;
	background-size: cover;
	background-repeat: no-repeat;
}

.menu-btn {
	left: 5px;
}

.menu-goback {
	right: 35px;
}

.menu-goForward {
	right: 0;
}
.menu-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
}

.side-content {
    z-index: 11;
    position: fixed;
    width: 286px;
    height: 100%;
    background: #fff;
    top: 0;
    left: 0;
    bottom: 0;
    -webkit-overflow-scrolling: touch;
}

.fade-enter-to,
.fade-leave-to {
    transition: opacity 0.3s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}

.slide-fade-enter-to,
.slide-fade-leave-to {
    transition: transform 0.3s;
    transform: translate(0px, 0px);
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
    -webkit-transform: translate(-286px, 0px);
    transform: translate(-286px, 0px);
    -webkit-transition: opacity 0.3s ease-in-out 0.3s, -webkit-transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out;
}

.change {
    display: block;
    width: 284px;
    height: 200px;
    background-size: cover;
    border: 1px solid #fff;
    overflow: hidden;
}

.change img {
    display: block;
    width: 220px;
    height: 180px;
    opacity: 0;
    -webkit-transform: translate(284px, 200px);
    transform: translate(284px, 200px);
    -webkit-transition: opacity 0.5s ease-in-out 0.5s, -webkit-transform 1s ease-in-out;
    transition: opacity 0.5s ease-in-out 0.5s, transform 1s ease-in-out;
}

.change:hover img {
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    opacity: 1;
}
</style>
