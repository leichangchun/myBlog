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
    "revision": "3398af8d0598904e255b1fb9bb1618f7"
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
    "url": "assets/js/app.e5b94e25.js",
    "revision": "ba449817cc3e3a18fcae7218c4e42b41"
  },
  {
    "url": "cssnotes/css-questions.html",
    "revision": "bd309c548f81ee8dd024de0675e3db11"
  },
  {
    "url": "cssnotes/css-rem.html",
    "revision": "3da87928a0a4b84b3d756aaab5792832"
  },
  {
    "url": "cssnotes/css-slideshow.html",
    "revision": "bc78addbd366fc556f7aae45c62b7c3d"
  },
  {
    "url": "cssnotes/index.html",
    "revision": "167d87681ba61b6f3a636f30101b11f2"
  },
  {
    "url": "demos/demo-fullscreen.html",
    "revision": "9a877657456dc6263bc9585d8cd5e272"
  },
  {
    "url": "demos/demo-img-lazyload.html",
    "revision": "fa75458cb24baf2397c750a220146044"
  },
  {
    "url": "demos/demo-img-loading.html",
    "revision": "80f32f9caec9832ff8e8b6685c6e0e24"
  },
  {
    "url": "demos/demo-img-map.html",
    "revision": "b9437109d04f164377417c1edfaccda0"
  },
  {
    "url": "demos/demo-input-upload.html",
    "revision": "bc2a1d591ae1ae2887677d5f315fb63f"
  },
  {
    "url": "demos/demo-node-crawler.html",
    "revision": "bffe1017953dfb5cb83630df2442ceba"
  },
  {
    "url": "demos/index.html",
    "revision": "982b3afea1973517019908343c62369a"
  },
  {
    "url": "doms/dom-event-detail.html",
    "revision": "dc945404e33a4e9803e05fd0e2b12161"
  },
  {
    "url": "doms/dom-event-order.html",
    "revision": "7273c62bc87b2dd4d3d0d2cff8b16094"
  },
  {
    "url": "doms/dom-event-self.html",
    "revision": "b813009d3a206087a1b577df4d1168f3"
  },
  {
    "url": "doms/index.html",
    "revision": "9a3ade14caacb1026fe381369d6d92f9"
  },
  {
    "url": "icon.png",
    "revision": "524e5bb5bf7e5918a6346044dde8331f"
  },
  {
    "url": "index.html",
    "revision": "f9a46d406583aebd2f199dad6bf1a4db"
  },
  {
    "url": "jsnotes/index.html",
    "revision": "171b7ee7f82060bdc0016feac2938fbe"
  },
  {
    "url": "jsnotes/js-deepcopy.html",
    "revision": "f43821ef0f6b9e3727a4e20ffd090db1"
  },
  {
    "url": "jsnotes/js-getter-setter.html",
    "revision": "374337b0d2ebeb5cacd2cfdb7967c683"
  },
  {
    "url": "jsnotes/js-has-property.html",
    "revision": "50652efab2073dc84ff1fadd47a7e19c"
  },
  {
    "url": "jsnotes/js-obj-extend.html",
    "revision": "f40df9e3684d295c0900d7d410e95ad1"
  },
  {
    "url": "jsnotes/js-reg-lastindex.html",
    "revision": "50f09d2d00a710e762983e6d334166a2"
  },
  {
    "url": "jsnotes/js-remove-arrayrepeat.html",
    "revision": "4615f4d52b04bfdcd3325af3562c8a2a"
  },
  {
    "url": "jsnotes/js-travesal.html",
    "revision": "4403cfd69ecd129fdfe1c48cb32015d6"
  },
  {
    "url": "jsnotes/js-type-change.html",
    "revision": "b7d1f779db886ecddf07f65f8009ffb4"
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
