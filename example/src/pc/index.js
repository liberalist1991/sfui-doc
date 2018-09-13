import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './index.vue';
import FocusDoc from '../../../src/index.js';
import routes from '../router';
import '../scripts/iframe-router';

Vue.use(VueRouter).use(FocusDoc);

const router = new VueRouter({
  mode: 'hash',
  routes: routes()
});

router.afterEach(() => {
  window.scrollTo(0, 0);
  Vue.nextTick(() => window.syncPath());
});

window.vueRouter = router;

new Vue({
  render: h => h(App),
  router,
  el: '#app'
});
