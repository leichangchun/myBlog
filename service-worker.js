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
    "revision": "5bc3b5376b3d89fc633c31d8e75dc825"
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
    "url": "assets/img/linear-gradient-01.08bbadce.png",
    "revision": "08bbadce9b2779eb689819d3a02a50c7"
  },
  {
    "url": "assets/img/linear-gradient-02.aa1acceb.png",
    "revision": "aa1acceb8f174f21b045b6644b3be11d"
  },
  {
    "url": "assets/img/linear-gradient-03.8273b342.png",
    "revision": "8273b342bf377eeb0763ac9b97dd51d4"
  },
  {
    "url": "assets/img/linear-gradient-04.91603054.png",
    "revision": "916030542b7d2104402a3d90b8ae490b"
  },
  {
    "url": "assets/img/linear-gradient-05.53a9ef7a.png",
    "revision": "53a9ef7a45c8712ee90a85dae13447db"
  },
  {
    "url": "assets/img/linear-gradient-06.28068eea.png",
    "revision": "28068eeae43ac7b37003bf93aa04297e"
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
    "url": "assets/js/10.b0db4541.js",
    "revision": "e3128e8be08b619baebe53cf81261bbd"
  },
  {
    "url": "assets/js/11.7a5d20fd.js",
    "revision": "a5b31defdf3f255136f8ae8b8817deb7"
  },
  {
    "url": "assets/js/12.2e2b2443.js",
    "revision": "ac6b502e3ca7c5af3632094fd55d40c5"
  },
  {
    "url": "assets/js/13.e2f309b2.js",
    "revision": "d24070ef4eb70470e34075b497d989c1"
  },
  {
    "url": "assets/js/14.fff4506c.js",
    "revision": "3a75680d49d69df1ac416591cfba88c8"
  },
  {
    "url": "assets/js/15.eac4b7ef.js",
    "revision": "5712671173e161ce4b36cce54ccbe04c"
  },
  {
    "url": "assets/js/16.cfa2a3ee.js",
    "revision": "e0ca3b908eb185566c24ad51464ba3f1"
  },
  {
    "url": "assets/js/17.fffbc1c3.js",
    "revision": "4ed54bf72778425b3e7ba40e68d52799"
  },
  {
    "url": "assets/js/18.e291c7e9.js",
    "revision": "121b7b7abfe36f166b1025cc30f9a510"
  },
  {
    "url": "assets/js/19.4172805a.js",
    "revision": "9e60e1a032c80580782015abcf6ab270"
  },
  {
    "url": "assets/js/2.2814ff24.js",
    "revision": "f10c0919af1faa19a3594434c1c53d8b"
  },
  {
    "url": "assets/js/20.8439abb7.js",
    "revision": "ad5908d0cdcd6240bf5e29e20da1aaba"
  },
  {
    "url": "assets/js/21.ec0d5649.js",
    "revision": "51d55b2a9801073018793d66932b704c"
  },
  {
    "url": "assets/js/22.3d2a0a96.js",
    "revision": "25267e8dd06217a42d69f24cb2ed6b69"
  },
  {
    "url": "assets/js/23.e7562fd1.js",
    "revision": "595d44092dd58b860a8a64a997054d43"
  },
  {
    "url": "assets/js/24.393ec896.js",
    "revision": "75d5fe8d73e92817dbc1dbc1a5059f27"
  },
  {
    "url": "assets/js/25.374f08f0.js",
    "revision": "79c140fd2b8a74fc9c950f3bbcd70b23"
  },
  {
    "url": "assets/js/26.7929d40b.js",
    "revision": "1f4d3430256ca1590b36d47253f1663e"
  },
  {
    "url": "assets/js/27.4b663e00.js",
    "revision": "6ac977b00923cc9f0463b11a8e6e3d3d"
  },
  {
    "url": "assets/js/28.b1bbb669.js",
    "revision": "7e54993636bd8bfdc5243534e6b48bab"
  },
  {
    "url": "assets/js/29.555e1825.js",
    "revision": "3e5d96284ab7697e519672d6ea38915e"
  },
  {
    "url": "assets/js/3.1a0972b7.js",
    "revision": "55046422efc0c8a951904dda4390db17"
  },
  {
    "url": "assets/js/30.a44b23ae.js",
    "revision": "8f4d9e011192aabf787883985d1ec409"
  },
  {
    "url": "assets/js/31.3d809be8.js",
    "revision": "63e62fe4c3876cdc9ff69e6cb477828c"
  },
  {
    "url": "assets/js/32.6153bb16.js",
    "revision": "dca743779885a2336dc40057bd474e17"
  },
  {
    "url": "assets/js/33.123602a4.js",
    "revision": "cbdaba2af75929d7f93ed73c124d6768"
  },
  {
    "url": "assets/js/4.cff63457.js",
    "revision": "58dbd5961e535c3a7aa29e65568a3a2b"
  },
  {
    "url": "assets/js/5.f318c68b.js",
    "revision": "65b0e968bcf532475e669b7677adf457"
  },
  {
    "url": "assets/js/6.8b41869f.js",
    "revision": "8448006dc2c2116fe5f05699ee99cfbf"
  },
  {
    "url": "assets/js/7.eebaa3b6.js",
    "revision": "827b46678f9a845dc283ba92b4d58eed"
  },
  {
    "url": "assets/js/8.de1950b5.js",
    "revision": "8707986a9d60a5836bf950590e93787b"
  },
  {
    "url": "assets/js/9.b833c60f.js",
    "revision": "db351889833eae2c2722bfac3a15e14d"
  },
  {
    "url": "assets/js/app.086134c3.js",
    "revision": "a6d4afc859146dd5a1709412b7110d63"
  },
  {
    "url": "cssnotes/css-in-center.html",
    "revision": "10266867e1bd495aa03d7341c4539ae7"
  },
  {
    "url": "cssnotes/css-propertys.html",
    "revision": "7ad6e95710a379a2621053abdca6a782"
  },
  {
    "url": "cssnotes/css-questions.html",
    "revision": "ec4bd35b14dde53dd9267a8ee876300c"
  },
  {
    "url": "cssnotes/css-rem.html",
    "revision": "7284c98c4c3cd111279902df8cc6016f"
  },
  {
    "url": "cssnotes/css-skills.html",
    "revision": "b2c1c6fd80ea764f84346005899548e9"
  },
  {
    "url": "cssnotes/css-slideshow.html",
    "revision": "60892b18b82b72eddeaa1e77afac162d"
  },
  {
    "url": "cssnotes/index.html",
    "revision": "c41b23b16a0f073225d72717e70da727"
  },
  {
    "url": "demos/demo-fullscreen.html",
    "revision": "c8d0e294ced1784eff483a88c648e2d0"
  },
  {
    "url": "demos/demo-img-lazyload.html",
    "revision": "5c01dadf69e10faae33a6687869aaffb"
  },
  {
    "url": "demos/demo-img-loading.html",
    "revision": "84439c31d09fb0554f1f28e55e4085fe"
  },
  {
    "url": "demos/demo-img-map.html",
    "revision": "ac95472ffc2c5d761c5aab0988f45e77"
  },
  {
    "url": "demos/demo-input-upload.html",
    "revision": "e1621ed46993ca75573dcc88cb43a617"
  },
  {
    "url": "demos/demo-node-crawler.html",
    "revision": "3d5bb6eda66d60a83ccefd58a2c81a6d"
  },
  {
    "url": "demos/index.html",
    "revision": "db0fc69a96cac1cd82aaca1bb4da3df1"
  },
  {
    "url": "doms/dom-event-detail.html",
    "revision": "157a07dc7b0281c17e8d6d34667a6009"
  },
  {
    "url": "doms/dom-event-order.html",
    "revision": "6f3fba5be527c4d882b40c9c28805d1a"
  },
  {
    "url": "doms/dom-event-self.html",
    "revision": "4ee35532ea756b922493edc2bd808c32"
  },
  {
    "url": "doms/index.html",
    "revision": "e9ed0ccae37b431c4b182ef34001dce9"
  },
  {
    "url": "icon.png",
    "revision": "524e5bb5bf7e5918a6346044dde8331f"
  },
  {
    "url": "index.html",
    "revision": "54f2519ece78e9376e0ea7aa8e4e39b7"
  },
  {
    "url": "jsnotes/index.html",
    "revision": "ed7d1ca64f6f73e25a572f077eac4afe"
  },
  {
    "url": "jsnotes/js-deepcopy.html",
    "revision": "9b44153c868eddf3ac800edb9046f241"
  },
  {
    "url": "jsnotes/js-getter-setter.html",
    "revision": "f6834f5daa61d52a3eef1258086345b5"
  },
  {
    "url": "jsnotes/js-has-property.html",
    "revision": "de4a1423b9324f18c6267b75ebcf2377"
  },
  {
    "url": "jsnotes/js-obj-extend.html",
    "revision": "9a01e4d365c3c6354fb60c223733ee2b"
  },
  {
    "url": "jsnotes/js-reg-lastindex.html",
    "revision": "7dcac537648e3fd603ab72a1e618b96b"
  },
  {
    "url": "jsnotes/js-remove-arrayrepeat.html",
    "revision": "c3652b7258f70edf574ac6b23356555e"
  },
  {
    "url": "jsnotes/js-this.html",
    "revision": "60b12e01b7cfa1e8e47c9e206a1006d4"
  },
  {
    "url": "jsnotes/js-travesal.html",
    "revision": "8a89228131cfc326bfe2410224abecef"
  },
  {
    "url": "jsnotes/js-type-autochange.html",
    "revision": "57bd0c4db061a897034e05b2ee2b80e9"
  },
  {
    "url": "jsnotes/js-type-judgement.html",
    "revision": "507b30ea43f16ce3708d7daebc5a45bc"
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
