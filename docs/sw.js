importScripts('workbox-sw.prod.v2.1.3.js');

const workboxSW = new self.WorkboxSW();

workboxSW.router.registerRoute(/.*(?:typicode)\.com.*$/, workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'cachedjsons'
}));

workboxSW.precache([
  {
    "url": "assets/android-launchericon-144-144.png",
    "revision": "8697491bb7241f4880488f5de158a37b"
  },
  {
    "url": "assets/android-launchericon-192-192.png",
    "revision": "29177a86d889319a5ddca395b50c0f4e"
  },
  {
    "url": "assets/android-launchericon-48-48.png",
    "revision": "61a8f49c1df316eb15e3b3082389ce9b"
  },
  {
    "url": "assets/android-launchericon-512-512.png",
    "revision": "3bc92c93aa38c543e24118ccbbcb7961"
  },
  {
    "url": "assets/android-launchericon-72-72.png",
    "revision": "7142a00a266f0e5b0435c3ae25edff8f"
  },
  {
    "url": "assets/android-launchericon-96-96.png",
    "revision": "ccc6ea4a88ab341607f0dda5562f0a87"
  },
  {
    "url": "assets/chrome-favicon-16-16.png",
    "revision": "7c7b77e934852c4abc87d399f6b2021f"
  },
  {
    "url": "assets/chrome-installprocess-128-128.png",
    "revision": "fb6de2efc8a7d127e2a50bd2d2bfd7c4"
  },
  {
    "url": "assets/ios-appicon-120-120.png",
    "revision": "99e4118486d7b90658204df25fe5015a"
  },
  {
    "url": "assets/ios-appicon-152-152.png",
    "revision": "1f4162c9af7b489a022f291ab0c1c3e7"
  },
  {
    "url": "assets/ios-appicon-180-180.png",
    "revision": "5b320749d205a147d235ccf9ddb5345d"
  },
  {
    "url": "assets/ios-appicon-76-76.png",
    "revision": "51815fa63688ac20a447869edfe8e99e"
  },
  {
    "url": "assets/logo.png",
    "revision": "a4580736c54749a39a58624d8114dce3"
  },
  {
    "url": "index.html",
    "revision": "09f5a420b9d562326aa337519a03b112"
  },
  {
    "url": "manifest.json",
    "revision": "220f7beb14dd49bd9ac03a90abb5614a"
  },
  {
    "url": "shared_bundle_1.js",
    "revision": "014a675bcaaaf82545bbf6d4aff50a96"
  },
  {
    "url": "src/assets/android-launchericon-144-144.png",
    "revision": "58b798d2a252252d39b4bd3b71e7a1ee"
  },
  {
    "url": "src/assets/android-launchericon-192-192.png",
    "revision": "35c7da84a3af464cef38259b67225a67"
  },
  {
    "url": "src/assets/android-launchericon-48-48.png",
    "revision": "69de5f8da22a43c79de7bd8eaefcb9c5"
  },
  {
    "url": "src/assets/android-launchericon-512-512.png",
    "revision": "46dc4da08387f0c10208ff1b13211529"
  },
  {
    "url": "src/assets/android-launchericon-72-72.png",
    "revision": "5389e0c97c11f4bcb8a70153e785288a"
  },
  {
    "url": "src/assets/android-launchericon-96-96.png",
    "revision": "a5be64c89c856a775c7f0bf9226893fc"
  },
  {
    "url": "src/assets/chrome-installprocess-128-128.png",
    "revision": "8f976b2bf83b475a147c00b4a9004c37"
  },
  {
    "url": "src/assets/ios-appicon-120-120.png",
    "revision": "671ab4f84a8edcdaf51ddb899988f84e"
  },
  {
    "url": "src/assets/ios-appicon-152-152.png",
    "revision": "6840c18872a631cce4402b009e40476d"
  },
  {
    "url": "src/assets/ios-appicon-180-180.png",
    "revision": "b9c21c7a9b5cf19b6b829b2085f1973f"
  },
  {
    "url": "src/assets/ios-appicon-76-76.png",
    "revision": "879698151945b1c75f75ff2f71762d2b"
  },
  {
    "url": "src/assets/manticore.png",
    "revision": "58831e6d88cf0266012590b4d14de889"
  },
  {
    "url": "sw-base.js",
    "revision": "d88570d9975e1489b6b85f40512b6b8f"
  },
  {
    "url": "sw.js",
    "revision": "26e7760a577aa7a249084e8da72c730f"
  },
  {
    "url": "workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
]);
