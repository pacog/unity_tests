const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const cachebust = require('gulp-cache-bust');

gulp.task('deploy', ['gh-pages-upload']);

gulp.task('gh-pages-upload', function() {
    'use strict';

    return gulp.src('./src/**/*')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(ghPages());
});
