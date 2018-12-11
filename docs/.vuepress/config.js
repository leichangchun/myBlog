module.exports = {
  title: 'Lei的博客',
  description: '每天都要有进步，学无止境，永不停步！',
  serviceWorker: true,
  themeConfig: {
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
    ],
    sidebar: {
      '/jsnotes/': [
        ''
      ],
      '/cssnotes/': [
        '',
        'css-rem',
        'css-slideshow',
        'css-questions'
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