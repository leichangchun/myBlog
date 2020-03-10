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
      },{
        text:'面试题集',
        link:'/interview/'
      },
      {
        text: '其他',
        items: [
          {
            text: 'DOM',
            link: '/doms/'
          },
          {
            text: '场景实例',
            link: '/demos/'
          },
          {
            text:'工具使用',
            link: '/toolnotes/'
          }
        ]
      }
    ],
    sidebar: {
      '/jsnotes/': [
        '',
        'js-call-apply-bind',
        'js-new',
        'js-prototype-and-chain',
        'js-inherit',
        'js-scope',
        'js-this',
        'js-compose',
        'js-date',
        'js-dom',
        'js-deepcopy',
        'js-obj-extend',
        'js-type-judgement',
        'js-type-autochange',
        'js-getter-setter',
        'js-travesal',
        'js-remove-arrayrepeat',
        'js-has-property',
        'js-urlparams',
        'js-reg-lastindex'
      ],
      '/cssnotes/': [
        '',
        'css-questions',
        'css-skills',
        'css-propertys',
        'css-in-center',
        'css-selectors',
        'css-rem'
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
        'demo-css-slideshow',
        'demo-node-crawler',
        'demo-img-loading',
        'demo-img-map',
        'demo-fullscreen'
      ],
      '/interview/':[
        ''
      ],
      '/toolnotes/':[
        '',
        'react-notes',
        'create-react-app',
        'redux-note-createStore',
        'redux-note-combineReducers',
        'redux-note-applyMiddleware',
        'redux-thunk',
        'react-optimization',
        'private-axios'
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