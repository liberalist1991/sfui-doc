import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './index.vue';
import routes from '../router';
import FocusDoc, { SyncPath, Progress } from '../../../src/index.js';

Vue.use(VueRouter).use(FocusDoc)

const router = new VueRouter({
  mode: 'hash',
  routes: routes(true)
});

SyncPath(router);
Progress(router);

new Vue({
  render: h => h(App),
  router,
  el: '#app'
});
