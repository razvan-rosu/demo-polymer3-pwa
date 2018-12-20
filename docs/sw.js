importScripts('workbox-sw.prod.v2.1.3.js');

const workboxSW = new self.WorkboxSW();

workboxSW.router.registerRoute(/.*(?:typicode)\.com.*$/, workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'cachedjsons'
}));

workboxSW.precache([
  {
    "url": "index.html",
    "revision": "5044cf1a17b48425066614c592450f3d"
  },
  {
    "url": "manifest.json",
    "revision": "88577d7c696f5957b77dc0a0b59666b8"
  },
  {
    "url": "service-worker.js",
    "revision": "ba7b4be3e7bbadc3c959c761e6cae437"
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
    "revision": "e25a5fabcefc3daeeda31f1be330cf83"
  },
  {
    "url": "workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
]);
