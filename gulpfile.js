'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(gulp.dest('./stylesheets'));
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('optimizar', () =>
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
);

gulp.task('default', ['sass', 'watch']);
