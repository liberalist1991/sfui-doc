import Vue from 'vue';
import VueClipboard from 'vue-clipboard2'
import SfuiDoc from './SfuiDoc';
import Nav from './component/Nav';
import Header from './component/Header';
import Container from './component/Container';
import Mobile from './component/Mobile';
import Code from './component/Code';
import PrefixClass from './mixins/prefixClass';
import SyncPath from './scripts/iframe-router';
import Progress from './scripts/progress';

const components = [
  Nav,
  Header,
  SfuiDoc,
  Container,
  Mobile,
  Code
];

export default function install() {
  Vue.mixin(PrefixClass);
  Vue.use(VueClipboard)

  components.map(Component => {
    Vue.component(Component.name, Component);
  });
}

export {
  Nav,
  Header,
  SfuiDoc,
  Container,
  FooterNav,
  Mobile,
  Code,
  SyncPath,
  Progress,
  VueClipboard
};
