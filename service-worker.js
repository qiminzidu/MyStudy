if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const f=e=>a(e,s),l={module:{uri:s},exports:c,require:f};i[s]=Promise.all(r.map((e=>l[e]||f(e)))).then((e=>(d(...e),c)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2024/09/28/hello-world/index.html",revision:"b62a9c32fdff098efa83bc53c3ee4216"},{url:"2024/09/30/关于 hexo 主题 butterfly 的 Local Search 配置问题/index.html",revision:"e621987827e0f54f022e060ed016d858"},{url:"2024/10/05/关于将hexo部署到GitHub的教程-收藏/index.html",revision:"b76eaa055726214fa7554da556af377a"},{url:"404.html",revision:"8c1a14ba80d65849f350c0acf65b2537"},{url:"about/index.html",revision:"7a5756856c19dcfae1977412405c7390"},{url:"archives/2024/09/index.html",revision:"ff4a1a52e345ee41d8eadf33286410b5"},{url:"archives/2024/10/index.html",revision:"615c1096af2f9f923c7e5b6e8cc7db1e"},{url:"archives/2024/index.html",revision:"df3471de1842fb6cbd72a93034ec5155"},{url:"archives/index.html",revision:"04ff3fbc17ca8727c3503a59b62bae13"},{url:"artitalk/index.html",revision:"fa9b7697571993002bb323056f7f9aa8"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"books/index.html",revision:"1c18fb3451b74bbb93fd15cdff67e277"},{url:"categories/index.html",revision:"37a9138cad9a1bf06866ee62587e8095"},{url:"categories/建站小记/index.html",revision:"f2e346d69a3ca2ed5dd1a94bdc740a4e"},{url:"css/index.css",revision:"c17f6cefe6b2bfe0a608fa62a6db0a66"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"0b80efba7a0eb6cb31ca4e2d72f9487f"},{url:"galleryGroup/index.html",revision:"36bf4b8d721e51f1d12666c359df0bc6"},{url:"games/index.html",revision:"c41c1ca2952dd751a23535b3d3ef8e1c"},{url:"images/小熊.png",revision:"5c9e438ad6e0b89ecd97b3abe56d6d6c"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/小熊.png",revision:"5c9e438ad6e0b89ecd97b3abe56d6d6c"},{url:"img/微信支付.png",revision:"cac3035e921f9f76d4ab6dde24284dab"},{url:"img/支付宝.jpg",revision:"7aadf4ab8d199eb5d9f9a818cb910246"},{url:"index.html",revision:"8bee86f281a5dd69064c1c4c0b126ac9"},{url:"js/main.js",revision:"26ad6fa7be2af4e864334a90fd58fcef"},{url:"js/search/algolia.js",revision:"ae3892ca76cb36de8e76fd61aecd78a2"},{url:"js/search/local-search.js",revision:"f10f1d4e86aad45b5c6d6b85afa2f550"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"64e071c53161915e23d55d47235843b2"},{url:"links/index.html",revision:"b2556a00bdb2dc0dffb0f8a6c7eb0cbe"},{url:"message/index.html",revision:"bbc916b6b78b98478513ff800f747f77"},{url:"movies/index.html",revision:"96daf3e558c91ff30d49c8c11c224f2c"},{url:"scripts/realtime.js",revision:"234a28a9ec0f386a730581e6ca39d24b"},{url:"shuoshuo/index.html",revision:"417adbd2f11b0dc8119e5169b72c7d21"},{url:"sw-register.js",revision:"d297f574e1772e1515c206845f22f0c0"},{url:"sw.js",revision:"022a13e7c6a3b62d0235d25ab9a00feb"},{url:"tags/butterfly/index.html",revision:"29caebd624e4d695ff74c4091e10b9ea"},{url:"tags/hexo/index.html",revision:"24547a2fe2121e9682355f91a8c038dd"},{url:"tags/index.html",revision:"59359a1bc9bb24d1196f2609fc4a4bca"},{url:"tags/local-search/index.html",revision:"c6817f20de6094665162e65d54d4f79b"},{url:"tags/搜索/index.html",revision:"a0f85ad5cf6022aea9056377d26af6a5"},{url:"tags/配置/index.html",revision:"9d471c82606c37aa0f145448f6bfa9ff"}],{})}));
//# sourceMappingURL=service-worker.js.map
