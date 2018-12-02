const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const swPrecache = require('sw-precache');

gulp.task('generate-service-worker', function(callback) {
  swPrecache.write('./service-worker.js', {
    staticFileGlobs: [ './**/*.{js,html,css,json,png,jpg,gif,svg,eot,ttf,woff,woff2}' ],
    stripPrefix: './'
  }, callback);
});

gulp.task('browser-sync', function () {
  // proxies polymer-cli server
  browserSync.init({
    proxy: {
      target: '127.0.0.1:8081/components/demo-polymer3-pwa', // can be [virtual host, sub-directory, localhost with port]
      ws: true // enables websockets
    },
    serveStatic: ['.', './assets'],
    open: false
  });
});

gulp.task('default', ['generate-service-worker', 'browser-sync'], () => {
  gulp.watch(['./assets/*.png', './src/*.js', './service-worker.js', './index.html']).on('change', reload)
});
