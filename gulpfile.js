const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');


function compileSASS() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./build/styles'));
}

function minifyJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function imageMin() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function Default() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false}, gulp.series(compileSASS));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false}, gulp.series(minifyJs));
    gulp.watch('./source/images/*', { ignoreInitial: false}, gulp.series(imageMin));
}

exports.default = Default;