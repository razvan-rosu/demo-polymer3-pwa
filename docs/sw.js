importScripts('workbox-sw.prod.v2.1.3.js');

const workboxSW = new self.WorkboxSW();

workboxSW.router.registerRoute(/.*(?:typicode)\.com.*$/, workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'cachedjsons'
}));

workboxSW.precache([
  {
    "url": "index.html",
    "revision": "eb8c4b9935b575eddce2afe8bff25d1a"
  },
  {
    "url": "manifest.json",
    "revision": "a284f5ce117921b6adbf1301e6d5b037"
  },
  {
    "url": "shared_bundle_1.js",
    "revision": "014a675bcaaaf82545bbf6d4aff50a96"
  },
  {
    "url": "src/assets/android-launchericon-144-144.png",
    "revision": "8697491bb7241f4880488f5de158a37b"
  },
  {
    "url": "src/assets/android-launchericon-192-192.png",
    "revision": "29177a86d889319a5ddca395b50c0f4e"
  },
  {
    "url": "src/assets/android-launchericon-48-48.png",
    "revision": "61a8f49c1df316eb15e3b3082389ce9b"
  },
  {
    "url": "src/assets/android-launchericon-512-512.png",
    "revision": "3bc92c93aa38c543e24118ccbbcb7961"
  },
  {
    "url": "src/assets/android-launchericon-72-72.png",
    "revision": "7142a00a266f0e5b0435c3ae25edff8f"
  },
  {
    "url": "src/assets/android-launchericon-96-96.png",
    "revision": "ccc6ea4a88ab341607f0dda5562f0a87"
  },
  {
    "url": "src/assets/chrome-favicon-16-16.png",
    "revision": "7c7b77e934852c4abc87d399f6b2021f"
  },
  {
    "url": "src/assets/chrome-installprocess-128-128.png",
    "revision": "fb6de2efc8a7d127e2a50bd2d2bfd7c4"
  },
  {
    "url": "src/assets/ios-appicon-120-120.png",
    "revision": "99e4118486d7b90658204df25fe5015a"
  },
  {
    "url": "src/assets/ios-appicon-152-152.png",
    "revision": "1f4162c9af7b489a022f291ab0c1c3e7"
  },
  {
    "url": "src/assets/ios-appicon-180-180.png",
    "revision": "5b320749d205a147d235ccf9ddb5345d"
  },
  {
    "url": "src/assets/ios-appicon-76-76.png",
    "revision": "51815fa63688ac20a447869edfe8e99e"
  },
  {
    "url": "src/assets/logo.png",
    "revision": "a4580736c54749a39a58624d8114dce3"
  },
  {
    "url": "sw-base.js",
    "revision": "d88570d9975e1489b6b85f40512b6b8f"
  },
  {
    "url": "sw.js",
    "revision": "d0aed0982c0ddeb24754220b07756262"
  },
  {
    "url": "workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
]);
