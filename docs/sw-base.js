importScripts('workbox-sw.prod.v2.1.3.js');

const workboxSW = new self.WorkboxSW();

workboxSW.router.registerRoute(/.*(?:typicode)\.com.*$/, workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'cachedjsons'
}));

workboxSW.precache([]);
