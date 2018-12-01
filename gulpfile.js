const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
var exec = require('child_process').exec;

gulp.task('default', ['browser-sync'], () => {
  gulp.watch(['./assets/*.png', './src/*.js', './index.html']).on('change', reload)
});

gulp.task('browser-sync', function () {
  // THIS IS FOR SITUATIONS WHEN YOU HAVE ANOTHER SERVER RUNNING
  browserSync.init({
    proxy: {
      target: '127.0.0.1:8081/components/demo-polymer3-pwa', // can be [virtual host, sub-directory, localhost with port]
      ws: true // enables websockets
    },
    serveStatic: ['.', './assets'],
    open: false
  });
});
