import Vue from 'vue';
import DocConfig from './doc.config';
import ComponentsMap from './components';
import DocsMap from './docs/';

const registerRoute = (isDemo) => {
  const route = [{
    path: '*',
    redirect: to => ''
  }];

  const navs = DocConfig.nav || [];
  navs.forEach(nav => {
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.children.forEach(page => addRoute(page));
      });
    } else {
      addRoute(nav);
    }
  });

  function addRoute(page) {
    let {
      path
    } = page;
    if (path) {
      path = path.replace('/', '');

      const component = isDemo ? ComponentsMap[path] || demo : DocsMap[path];

      if (!component) {
        return;
      }

      route.push({
        name: path,
        component,
        path: `/${path}`,
        meta: {
          path,
          name: page.title
        }
      });
    }
  }
  return route;
};

export default registerRoute
