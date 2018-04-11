" use strict";

var gulp = require("gulp")
fs = require('fs'),
    cssmin = require('gulp-cssmin'),
    merge = require('merge-stream'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    less = require('gulp-less'),
    browserSync = require("browser-sync").create();


var dir = './public_dev';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}


gulp.task('build-stylesheets', function (e) {

    var lessStream = gulp.src('public_dev/stylesheets/less/**/*.less')
        .pipe(less())
        .pipe(concat('less-files.less'))
        ;

    var scssStream = gulp.src('public_dev/stylesheets/sass/**/*.scss')
        .pipe(sass())
        .pipe(concat('scss-files.scss'))
        ;

    var cssStream = gulp.src('public_dev/stylesheets/css/**/*.css')
        .pipe(concat('css-files.css'))
        ;

    var mergedStream = merge(lessStream, scssStream, cssStream)
        .pipe(concat('style.css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('public/stylesheets/'));

    return mergedStream;
});

gulp.task("browser-sync", function (e) {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});
gulp.task("watch", function (e) {
    gulp.watch('public_dev/stylesheets/css/**/*.css', ['build-stylesheets']);
    gulp.watch('public_dev/stylesheets/less/**/*.less', ['build-stylesheets']);
    gulp.watch('public_dev/stylesheets/sass/**/*.scss', ['build-stylesheets']);
    gulp.watch('public/**/*', browserSync.reload);
    gulp.watch('public/views/**/*', browserSync.reload);
});


gulp.task('default', ['browser-sync', "watch", "build-stylesheets"]);