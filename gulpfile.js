const gulp = require('gulp');
const cachebust = require('gulp-cache-bust');

gulp.task('deploy', ['gh-pages-upload']);

gulp.task('cache-bust', function() {
    'use strict';

    return gulp
        .src('./src/**/*.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('./src'));
});
