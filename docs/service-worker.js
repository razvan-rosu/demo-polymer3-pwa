importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/android-launchericon-144-144.png",
    "revision": "58b798d2a252252d39b4bd3b71e7a1ee"
  },
  {
    "url": "assets/android-launchericon-192-192.png",
    "revision": "35c7da84a3af464cef38259b67225a67"
  },
  {
    "url": "assets/android-launchericon-48-48.png",
    "revision": "69de5f8da22a43c79de7bd8eaefcb9c5"
  },
  {
    "url": "assets/android-launchericon-512-512.png",
    "revision": "46dc4da08387f0c10208ff1b13211529"
  },
  {
    "url": "assets/android-launchericon-72-72.png",
    "revision": "5389e0c97c11f4bcb8a70153e785288a"
  },
  {
    "url": "assets/android-launchericon-96-96.png",
    "revision": "a5be64c89c856a775c7f0bf9226893fc"
  },
  {
    "url": "assets/chrome-installprocess-128-128.png",
    "revision": "8f976b2bf83b475a147c00b4a9004c37"
  },
  {
    "url": "assets/ios-appicon-120-120.png",
    "revision": "671ab4f84a8edcdaf51ddb899988f84e"
  },
  {
    "url": "assets/ios-appicon-152-152.png",
    "revision": "6840c18872a631cce4402b009e40476d"
  },
  {
    "url": "assets/ios-appicon-180-180.png",
    "revision": "b9c21c7a9b5cf19b6b829b2085f1973f"
  },
  {
    "url": "assets/ios-appicon-76-76.png",
    "revision": "879698151945b1c75f75ff2f71762d2b"
  },
  {
    "url": "assets/manticore.png",
    "revision": "58831e6d88cf0266012590b4d14de889"
  },
  {
    "url": "shared_bundle_1.js",
    "revision": "014a675bcaaaf82545bbf6d4aff50a96"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
