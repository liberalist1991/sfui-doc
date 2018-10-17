import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './index.vue';
import FocusDoc, { SyncPath, Progress, VueClipboard } from '../../../src/index.js';
import routes from '../router';

Vue.use(VueRouter).use(FocusDoc);
Vue.use(VueClipboard)

const router = new VueRouter({
  mode: 'hash',
  routes: routes()
});

SyncPath(router);

Progress(router);

new Vue({
  render: h => h(App),
  router,
  el: '#app'
});
