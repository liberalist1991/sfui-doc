### sfui-doc

vue组件库 doc文档先行框架

引入
```javascript
import VueRouter from 'vue-router';

import FocusDoc, {SyncPath} from 'sfui-doc';
Vue.use(VueRouter).use(FocusDoc);
const router = new VueRouter({...});
SyncPath(router) // 需要手机预览视图时，引入SyncPath同步路由
```

```javascript
<template lang="pug">
div.app
	sfui-doc(
		:config="config"
		:mobile="mobile")
		router-view
</template>
<script>
import docConfig from './doc.config';
export default {
  data() {
     return {
       mobile: `mobile.html${location.hash}` // 需要手机预览视图时，传入页面地址
    };
  },
  computed: {
    config() {
      return docConfig;
    },
  }
};
</script>
```

`doc.config.js`: 导航菜单配置

```javascript
const version = '0.0.1';

module.exports = {
  header: {
    logo: {
      image: '',
      title: '',
      version: version,
      href: '#/'
    },
    nav: {
      '导航1': '/'
    }
  },
  nav: [{
      name: '文档',
      children: [{
        path: '/demo1',
        title: '文档1'
      }]
    },

    {
      name: '组件',
      groups: [{
        name: '分组示例',
        children: [
          {
            path: '/a',
            title: 'a'
          },
        ]
      }]
    }
  ]
};

```
