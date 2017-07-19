'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('stylesheets/screen.css'));

});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});



var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('stylesheets/screen.css'))
);
