"use strict";

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var riot = require('gulp-riot');
var del = require('del');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');

var config = {
    srcDir : 'src/',
    sassPattern: 'scss/**/*.scss',
    jsPattern: 'js/**/*.js',
    imgPattern: 'img/**/*.+(png|jpg|jpeg|gif|svg|ico)',
    riotPattern: 'riot/**/*.tag',
    publicDir: 'public/'
};

gulp.task('default', function (callback) {
    runSequence('clean:public',
        ['css', 'js', 'img', 'riot'],
        'watch',
        'nodemon',
        callback
    );
});

gulp.task('nodemon', function () {
    nodemon({
        script: 'index.js',
        execMap: {
            js: "node --harmony"
        },
        ext: 'js'
    }); 
});

gulp.task('css', function () {
    return sass(config.srcDir+config.sassPattern)
        .on('error', sass.logError)
        //.pipe(rename({suffix: '.min'}))  in production
        //.pipe(minifycss()) in production
        .pipe(gulp.dest(config.publicDir + 'css'));
});

gulp.task('js', function () {
    return gulp.src(config.srcDir + config.jsPattern)
        .on('error', sass.logError)
        .pipe(gulp.dest(config.publicDir + 'js'));
});

gulp.task('img', function () {
    return gulp.src(config.srcDir + config.imgPattern)
        .pipe(imagemin())
        .pipe(gulp.dest(config.publicDir + 'img'));
});

gulp.task('riot', function (callback) {
    runSequence(
        'riot-compile',
        'riot-concat',
        callback
    )
});

gulp.task('riot-compile', function () {
    return gulp.src(config.srcDir + config.riotPattern)
        .pipe(riot())
        .pipe(gulp.dest(config.publicDir + 'riot'));
});

gulp.task('riot-concat', function () {
    return gulp.src(config.publicDir + 'riot/**/*.js')
        .pipe(concat('riotApplication.js'))
        .pipe(gulp.dest(config.publicDir + 'js'));
});

gulp.task('watch', function () {
    gulp.watch(config.srcDir + config.sassPattern, ['css']);
    gulp.watch(config.srcDir + config.jsPattern, ['js']);
    gulp.watch(config.srcDir + config.imgPattern, ['img']);
    gulp.watch(config.srcDir + config.riotPattern, ['riot']);
});

gulp.task('clean:public', function () {
    del.sync(config.publicDir + 'riot');
    del.sync(config.publicDir + 'js');
    del.sync(config.publicDir + 'css');
    del.sync(config.publicDir + 'img')
});