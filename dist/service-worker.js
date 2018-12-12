/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "665a596e2bfc5605d1e5d4313ee9e8bc"
  },
  {
    "url": "assets/css/0.styles.ab926ebc.css",
    "revision": "083e05745c49d4fb5890151e51074dfd"
  },
  {
    "url": "assets/img/demo-img-lazyload-01.d3cc58b6.png",
    "revision": "d3cc58b6ae1f156552745b925a733529"
  },
  {
    "url": "assets/img/demo-img-lazyload-02.30bda303.png",
    "revision": "30bda303509e34f2f212b76634fa131d"
  },
  {
    "url": "assets/img/demo-img-lazyload-03.53a0893d.png",
    "revision": "53a0893d13e8ff1505a5f1624537530c"
  },
  {
    "url": "assets/img/demo-img-loading.96172c5b.png",
    "revision": "96172c5b299f670f45e2894118e569fc"
  },
  {
    "url": "assets/img/demo-img-map.3feadd1d.png",
    "revision": "3feadd1ddc05d4224545dab7906c3007"
  },
  {
    "url": "assets/img/demo-input-02.ae0ec987.png",
    "revision": "ae0ec987e46c656c4281bbbf19be8146"
  },
  {
    "url": "assets/img/demo-node-crawler.7dcead04.png",
    "revision": "7dcead04d7bb02059a83ae729760211b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/type-change-01.41dfd571.png",
    "revision": "41dfd571ba71bb81524c642234d24920"
  },
  {
    "url": "assets/js/10.d02f8b2c.js",
    "revision": "f1cd7e55ad71ce3840d7ba968d1c9b49"
  },
  {
    "url": "assets/js/11.28bc3128.js",
    "revision": "9d786d9134a61228af0f1088ef28808b"
  },
  {
    "url": "assets/js/12.9695e69b.js",
    "revision": "b06e63ddb4204ab908aaef5f84efe46f"
  },
  {
    "url": "assets/js/13.64325573.js",
    "revision": "7e026b93ee7402ef6438eb584e9b7326"
  },
  {
    "url": "assets/js/14.ae13175c.js",
    "revision": "4464baeb86d00c45dcbdaff09746e8f7"
  },
  {
    "url": "assets/js/15.dadd1b62.js",
    "revision": "dc7e576f17e01cc1c459c021836a62aa"
  },
  {
    "url": "assets/js/16.21bdbc66.js",
    "revision": "fdcb6388ab2d79a693e03acf0dd42c91"
  },
  {
    "url": "assets/js/17.185ed2bf.js",
    "revision": "46fc867e75362a8034a0cd86f9d7f2ca"
  },
  {
    "url": "assets/js/18.9b8893e8.js",
    "revision": "53d0755150905f89079761f28e1c8c71"
  },
  {
    "url": "assets/js/19.b7e1b25a.js",
    "revision": "a8f843b55da5139bd969c967c1e33816"
  },
  {
    "url": "assets/js/2.9afd41c3.js",
    "revision": "b94f8ea938f6c9785fadd0960fa85868"
  },
  {
    "url": "assets/js/20.8d93eced.js",
    "revision": "ee71f414259ab55d40f3b15ca280fb29"
  },
  {
    "url": "assets/js/21.9ce86748.js",
    "revision": "339dc7b0c0cc4671a91ad75ada3d9a99"
  },
  {
    "url": "assets/js/22.76f411bd.js",
    "revision": "4e45d5ec6405f026e3ec15f614cd3e1f"
  },
  {
    "url": "assets/js/23.3336daaa.js",
    "revision": "bf70870686e35a031a3626fda3b88494"
  },
  {
    "url": "assets/js/24.47df66d9.js",
    "revision": "0c1e898821ea271776b02ce6138c00ef"
  },
  {
    "url": "assets/js/25.71091c7a.js",
    "revision": "e7d7e17aad49014e90e84e50b6dbf4a5"
  },
  {
    "url": "assets/js/26.3de12df2.js",
    "revision": "d6224081699b29e2bb6f5291b5e6dd0d"
  },
  {
    "url": "assets/js/27.44c1c49d.js",
    "revision": "1719321ce00bf65b6efaf45c3771114d"
  },
  {
    "url": "assets/js/28.e415a9e4.js",
    "revision": "8938dc3ab3432d2cb4771119bce44204"
  },
  {
    "url": "assets/js/3.f4ca7fc3.js",
    "revision": "77adaecc33a632a96f9feddc8c42919d"
  },
  {
    "url": "assets/js/4.be296ccd.js",
    "revision": "2fede7de949743e610a84bdef802cd28"
  },
  {
    "url": "assets/js/5.80a1b20c.js",
    "revision": "373f6288eb84f6705ccd0d430169bb98"
  },
  {
    "url": "assets/js/6.c9cfe50d.js",
    "revision": "d90391daa48494775812b9b0b39e9b3b"
  },
  {
    "url": "assets/js/7.0e46f2d0.js",
    "revision": "9a1c28a79a92c8765b1a0d87c947d8a6"
  },
  {
    "url": "assets/js/8.53328b76.js",
    "revision": "f4f4fcbe5100ec1e7424efd12aa7b505"
  },
  {
    "url": "assets/js/9.b1c3a161.js",
    "revision": "1423dde4bb3a6c3c4f3cc7b726d13421"
  },
  {
    "url": "assets/js/app.44bcb9ca.js",
    "revision": "5a4bd989a92ced54eb8328982ee91997"
  },
  {
    "url": "cssnotes/css-questions.html",
    "revision": "36554d7eac775201a5f396f96b727dab"
  },
  {
    "url": "cssnotes/css-rem.html",
    "revision": "03a9f20b86e21f7af944c60fbab135c8"
  },
  {
    "url": "cssnotes/css-slideshow.html",
    "revision": "1145022b7aa0d2c682bdaf63ecfdaca4"
  },
  {
    "url": "cssnotes/index.html",
    "revision": "97814117a1735f3a34aefa82753573c4"
  },
  {
    "url": "demos/demo-fullscreen.html",
    "revision": "b82b35a123dbc380b3b479252dac0937"
  },
  {
    "url": "demos/demo-img-lazyload.html",
    "revision": "f5352208b42893d69797d452b5f7afdb"
  },
  {
    "url": "demos/demo-img-loading.html",
    "revision": "02645e4c3d83a3a3dfbd4d5645aaa4d9"
  },
  {
    "url": "demos/demo-img-map.html",
    "revision": "c7d78c2fff564704491aa95307b93ef0"
  },
  {
    "url": "demos/demo-input-upload.html",
    "revision": "dc418d10c32acd3dd36763d2945fb4d8"
  },
  {
    "url": "demos/demo-node-crawler.html",
    "revision": "7fba555237e4ec1e75ac62d567a7e32d"
  },
  {
    "url": "demos/index.html",
    "revision": "bed3074e21a2a0e68b97556f88970211"
  },
  {
    "url": "doms/dom-event-detail.html",
    "revision": "e473ca0ccee2ae9b96b3839d8c33cc23"
  },
  {
    "url": "doms/dom-event-order.html",
    "revision": "61595c8deccb5db3238ab7bf2d3a963d"
  },
  {
    "url": "doms/dom-event-self.html",
    "revision": "0adf860c614885efe4aa2b69f6365c7b"
  },
  {
    "url": "doms/index.html",
    "revision": "6a426c5f78567d6d37cdb44ba498dee8"
  },
  {
    "url": "icon.png",
    "revision": "524e5bb5bf7e5918a6346044dde8331f"
  },
  {
    "url": "index.html",
    "revision": "64eb90196a3a59cbcd8edabf9c40cb8e"
  },
  {
    "url": "jsnotes/index.html",
    "revision": "d71ec804e6cb352ff0be7922f7513d81"
  },
  {
    "url": "jsnotes/js-deepcopy.html",
    "revision": "d6dc76f488f85ccfdc55609656560ffb"
  },
  {
    "url": "jsnotes/js-getter-setter.html",
    "revision": "133c3000094abc47b2eaf815305be5e5"
  },
  {
    "url": "jsnotes/js-has-property.html",
    "revision": "1a0b092bbf3c94ecda248273d6f3792e"
  },
  {
    "url": "jsnotes/js-obj-extend.html",
    "revision": "6378059d95fa7de2ee5c76913d4f8512"
  },
  {
    "url": "jsnotes/js-reg-lastindex.html",
    "revision": "0bdd604fbc0a6b24c1662a655e04f596"
  },
  {
    "url": "jsnotes/js-remove-arrayrepeat.html",
    "revision": "1b2a290e41d69b597357ca11be8acbe0"
  },
  {
    "url": "jsnotes/js-travesal.html",
    "revision": "8ea704534486497df33e115e5bb9d618"
  },
  {
    "url": "jsnotes/js-type-change.html",
    "revision": "fc0b3704a8b45367d2722c4c99b2c8a2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
