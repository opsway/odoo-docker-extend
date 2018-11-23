'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('js', function() {
    return gulp.src([
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/jquery-validation/dist/jquery.validate.min.js',
        './node_modules/bxslider/dist/jquery.bxslider.min.js',
        './node_modules/popper.js/dist/umd/popper-utils.min.js',
        './node_modules/popper.js/dist/umd/popper.min.js',
        './node_modules/@fortawesome/fontawesome-free/js/all.min.js'])
        .pipe(gulp.dest("./static/js"));
});

gulp.task('sass', function () {
  return gulp.src(['./static/scss/styles.scss'])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('build', ['sass', 'js', 'sass:watch']);

gulp.task('default', [], function () {
  gulp.start('build');
});

