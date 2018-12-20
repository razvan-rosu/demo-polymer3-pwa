const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

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

gulp.task('default', ['browser-sync'], () => {
  gulp.watch(['./assets/*.png', './src/*.js', './service-worker.js', './index.html']).on('change', reload)
});
