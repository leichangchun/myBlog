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
    "revision": "7f9b7d067917ec053fa6b788dee0f5b1"
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
    "url": "assets/js/app.cfbc29c8.js",
    "revision": "845784c9bf377d67ebe1ee12aeff700d"
  },
  {
    "url": "cssnotes/css-questions.html",
    "revision": "8790c2351e5e42c94ab0ca2ba6405b82"
  },
  {
    "url": "cssnotes/css-rem.html",
    "revision": "a9a5ae7266d41450607ca48e53e8c72a"
  },
  {
    "url": "cssnotes/css-slideshow.html",
    "revision": "4c51e8bf7ed00037f12dbe1eb4d486aa"
  },
  {
    "url": "cssnotes/index.html",
    "revision": "754430c4f538e6fd44f000f5477abe7b"
  },
  {
    "url": "demos/demo-fullscreen.html",
    "revision": "a73695e374c1c66e6e909c6dc85a9426"
  },
  {
    "url": "demos/demo-img-lazyload.html",
    "revision": "dd0ea915275b24b9322a69fc076eef78"
  },
  {
    "url": "demos/demo-img-loading.html",
    "revision": "d935a9cbd81bb2e3530f1d0a5ca50807"
  },
  {
    "url": "demos/demo-img-map.html",
    "revision": "644bcea572da4df81fef0b0033db0dd7"
  },
  {
    "url": "demos/demo-input-upload.html",
    "revision": "e0ebaa9412c8e5b4d3fc16769cf296bf"
  },
  {
    "url": "demos/demo-node-crawler.html",
    "revision": "5c0f28c91722e9066a6192e15adaaf85"
  },
  {
    "url": "demos/index.html",
    "revision": "9408bdba3eb915b4665f4b4e933fee29"
  },
  {
    "url": "doms/dom-event-detail.html",
    "revision": "be593b1fbd8e7d9dbab10fe110818025"
  },
  {
    "url": "doms/dom-event-order.html",
    "revision": "fb44dbeaa273a38b75ae06c3ca899a4e"
  },
  {
    "url": "doms/dom-event-self.html",
    "revision": "22003c9decdf97b382616f2c4d37e3ee"
  },
  {
    "url": "doms/index.html",
    "revision": "913afdcc1cefb5b36ad1b239f9b3b5a9"
  },
  {
    "url": "icon.png",
    "revision": "524e5bb5bf7e5918a6346044dde8331f"
  },
  {
    "url": "index.html",
    "revision": "79dfce7b206de2e87311c9bd1839252c"
  },
  {
    "url": "jsnotes/index.html",
    "revision": "b8617755a8c6025c7868631a4ad842d1"
  },
  {
    "url": "jsnotes/js-deepcopy.html",
    "revision": "bb497cc9ac2ff9e6c205f3684eababe1"
  },
  {
    "url": "jsnotes/js-getter-setter.html",
    "revision": "295d9ba7e79e3efe251e8a91cc36ab46"
  },
  {
    "url": "jsnotes/js-has-property.html",
    "revision": "411df7e88d27901f965fb1adbfdc247c"
  },
  {
    "url": "jsnotes/js-obj-extend.html",
    "revision": "c21a784a48e6be625e2f1c24b16b4875"
  },
  {
    "url": "jsnotes/js-reg-lastindex.html",
    "revision": "b36d098d8bfd772d1dc12ebe838427fe"
  },
  {
    "url": "jsnotes/js-remove-arrayrepeat.html",
    "revision": "42f32cef19df30eedabfb29d56b58cf0"
  },
  {
    "url": "jsnotes/js-travesal.html",
    "revision": "7ec52f7ea03276cdd072c4b1bade4085"
  },
  {
    "url": "jsnotes/js-type-change.html",
    "revision": "d69aa9ee62604ff36c922c1a943185a7"
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
