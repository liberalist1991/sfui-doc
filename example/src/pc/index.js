import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './index.vue';
import FocusDoc, { SyncPath } from '../../../src/index.js';

import routes from '../router';

Vue.use(VueRouter).use(FocusDoc);

const router = new VueRouter({
  mode: 'hash',
  routes: routes()
});

SyncPath(router);

new Vue({
  render: h => h(App),
  router,
  el: '#app'
});
