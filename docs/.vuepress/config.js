module.exports = {
  base: `/myBlog/`,
  dest: './dist',
  title: 'Lei的博客',
  description: '每天都要有进步，学无止境，永不停步！',
  serviceWorker: true,
  themeConfig: {
    repo: 'leichangchun/myBlog',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'JavaScript',
        link: '/jsnotes/'
      },
      {
        text: 'CSS',
        link: '/cssnotes/'
      },
      {
        text: '场景实例',
        link: '/demos/'
      },
      {
        text: '其他',
        items: [
          {
            text: 'DOM',
            link: '/doms/'
          }
        ]
      }
    ],
    sidebar: {
      '/jsnotes/': [
        '',
        'js-deepcopy',
        'js-obj-extend',
        'js-type-change',
        'js-travesal',
        'js-remove-arrayrepeat',
        'js-getter-setter',
        'js-has-property',
        'js-reg-lastindex'
      ],
      '/cssnotes/': [
        '',
        'css-skills',
        'css-in-center',
        'css-rem',
        'css-slideshow',
        'css-questions'
      ],
      '/doms/': [
        '',
        'dom-event-self',
        'dom-event-detail',
        'dom-event-order'
      ],
      '/demos/' : [
        '',
        'demo-input-upload',
        'demo-img-lazyload',
        'demo-node-crawler',
        'demo-img-loading',
        'demo-img-map',
        'demo-fullscreen'
      ]
    }
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-sub'))
        .use(require('markdown-it-sup'))
        .use(require('markdown-it-ins'))
        .use(require('markdown-it-mark'))
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-task-lists'))
    }
  }
}