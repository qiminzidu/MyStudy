if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const f=e=>a(e,s),l={module:{uri:s},exports:c,require:f};i[s]=Promise.all(d.map((e=>l[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2024/09/28/hello-world/index.html",revision:"b62a9c32fdff098efa83bc53c3ee4216"},{url:"2024/09/30/关于 hexo 主题 butterfly 的 Local Search 配置问题/index.html",revision:"e621987827e0f54f022e060ed016d858"},{url:"2024/10/05/关于将hexo部署到GitHub的教程-收藏/index.html",revision:"b76eaa055726214fa7554da556af377a"},{url:"404.html",revision:"ebda41ebcb55dea2f5f41c5e65eeb9de"},{url:"about/index.html",revision:"1b0a11bdfead5869ef6273a6f4df4c06"},{url:"archives/2024/09/index.html",revision:"3d352cba680c20cb9f171cf430f05693"},{url:"archives/2024/10/index.html",revision:"70a18a4118a11d8c0b2ba0dab8e93b7b"},{url:"archives/2024/index.html",revision:"2bd55987ee4c36984d4436222cbea455"},{url:"archives/index.html",revision:"73d675afe6b9c247f6adaddcfdb28f9c"},{url:"artitalk/index.html",revision:"b854a0f23ce65dbba59e84280d1ff8db"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"books/index.html",revision:"4252c51f7bae5139c31fd853b63ed9ce"},{url:"categories/index.html",revision:"5a99c3f7333bf3176a1740962b042aee"},{url:"categories/建站小记/index.html",revision:"1be7c2d0d4a77a195002df36eea686e1"},{url:"css/index.css",revision:"c17f6cefe6b2bfe0a608fa62a6db0a66"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"403f0a1ecbf9454df4be06a257391c08"},{url:"galleryGroup/index.html",revision:"766160ab2c0bba3e6ecd367e432a5819"},{url:"games/index.html",revision:"5f2d5303915a3ae16dcf00a292ded244"},{url:"images/小熊.png",revision:"5c9e438ad6e0b89ecd97b3abe56d6d6c"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/小熊.png",revision:"5c9e438ad6e0b89ecd97b3abe56d6d6c"},{url:"img/微信支付.png",revision:"cac3035e921f9f76d4ab6dde24284dab"},{url:"img/支付宝.jpg",revision:"7aadf4ab8d199eb5d9f9a818cb910246"},{url:"index.html",revision:"5ccd27fd98170e627a4037e8fe80c01a"},{url:"js/main.js",revision:"26ad6fa7be2af4e864334a90fd58fcef"},{url:"js/search/algolia.js",revision:"ae3892ca76cb36de8e76fd61aecd78a2"},{url:"js/search/local-search.js",revision:"f10f1d4e86aad45b5c6d6b85afa2f550"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"64e071c53161915e23d55d47235843b2"},{url:"links/index.html",revision:"66f5ca4cce275ed3367a648b841f514e"},{url:"message/index.html",revision:"5810beaebb9c5e1fe96cfead89cfc7a6"},{url:"movies/index.html",revision:"daf74a323c2c4da1179222242591362c"},{url:"scripts/realtime.js",revision:"234a28a9ec0f386a730581e6ca39d24b"},{url:"shuoshuo/index.html",revision:"ded9353698ffc2cb28b41e47600c42d6"},{url:"sw-register.js",revision:"06fe7b2b7580958af6d8b02579d43d56"},{url:"sw.js",revision:"022a13e7c6a3b62d0235d25ab9a00feb"},{url:"tags/butterfly/index.html",revision:"440ce271df3ad480f23dc9615aec8483"},{url:"tags/hexo/index.html",revision:"4fe96f140c0f5b526467adc42d93e190"},{url:"tags/index.html",revision:"31458d8faafe221be70ddfa43617fc0a"},{url:"tags/local-search/index.html",revision:"b1ec34a4f38fcf111035b32767ddd543"},{url:"tags/搜索/index.html",revision:"6d187c0325c49d19d0ec581ac7b9b2b5"},{url:"tags/配置/index.html",revision:"814d6c41a4d2bf58d30017cf5a9f1796"}],{})}));
//# sourceMappingURL=service-worker.js.map
