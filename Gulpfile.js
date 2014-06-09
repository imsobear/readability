var gulp = require('gulp');
var fs = require('fs');

var clean = require('gulp-clean'); 
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus');
var minifyCSS = require('gulp-minify-css');


var BASE = 'assets/',
    SRC_BASE = BASE + 'src',
    BUILD_BASE = BASE;


// gulp.task('clean', function () {
//     return gulp.
//         src(BUILD_BASE, {read: false}).
//         pipe(clean());
// });

gulp.task('css', function () {
    gulp
        .src(SRC_BASE + '/stylus/screen.styl')
        .pipe(stylus())
        .pipe(minifyCSS())
        .pipe(gulp.dest(BUILD_BASE + 'css/'));
});

gulp.task('js', function () {
    gulp.src(SRC_BASE + '/js/index.js')
        // .pipe(uglify())
        .pipe(gulp.dest(BUILD_BASE + 'js/'));
});

// 监听
gulp.task('watch', function() {
  gulp.watch(SRC_BASE + '/**/*.styl', ['css']);
  gulp.watch(SRC_BASE + '/**/*.js', ['js']);
});

gulp.task('default', ['css', 'js']);