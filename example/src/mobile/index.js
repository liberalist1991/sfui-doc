import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './index.vue';
import routes from '../router';
import FocusDoc, { SyncPath } from '../../../src/index.js';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: routes(true)
});

SyncPath(router);

new Vue({
  render: h => h(App),
  router,
  el: '#app'
});
