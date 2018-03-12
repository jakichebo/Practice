const gulp = require('gulp'),
    watch = require('gulp-watch'),
    webserver = require('gulp-webserver'),
    dest = 'LearningWebsite';

  gulp.task('html', function() {
    gulp.src(dest + '*.html');
  });

  gulp.task('css', function() {
    gulp.dest(dest + 'css');
  });

  gulp.task('js', function() {
    gulp.dest(dest + 'js');
  });

  gulp.task('watch', function() {
    gulp.watch(dest + '**/**/*.css', ['css']);
    gulp.watch(dest + '**/**/*.js', ['js']);
    gulp.watch(dest + '**/*.html', ['html']);
  });

gulp.task('webserver', function() {
  gulp.src(dest)
    .pipe(webserver({
      livereload: true,
      port: 8000,
      open: true
    }));
});

gulp.task('default', ['html', 'css', 'webserver','watch']);
