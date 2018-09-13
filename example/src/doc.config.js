const version = '0.0.1';

module.exports = {
  header: {
    logo: {
      image: 'https://t.focus-res.cn/front-end/image/focus-logo-v2/logo_120_120.png',
      title: 'sfui',
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
        path: '/',
        title: '文档1'
      }]
    },

    {
      name: '组件',
      groups: [{
        name: '分组示例',
        children: [{
            path: '/demo1',
            title: 'Demo1 示例一'
          },

          {
            path: '/demo2',
            title: 'Demo2 示例二'
          },
        ]
      }]
    }
  ]
};
