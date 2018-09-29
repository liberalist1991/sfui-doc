import Vue from 'vue';
import SfuiDoc from './SfuiDoc';
import Nav from './component/Nav';
import Header from './component/Header';
import Container from './component/Container';
import Mobile from './component/Mobile';
import PrefixClass from './mixins/prefixClass';
import SyncPath from './scripts/iframe-router';

const components = [
  Nav,
  Header,
  SfuiDoc,
  Container,
  Mobile
];

export default function install() {
  Vue.mixin(PrefixClass);

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
  SyncPath
};
