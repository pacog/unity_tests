const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

gulp.task('deploy', ['gh-pages-upload']);

gulp.task('gh-pages-upload', function() {
  return gulp.src('./src/**/*')
    .pipe(ghPages());
});
