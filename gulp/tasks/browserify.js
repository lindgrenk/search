var config     = require('../config.json').js;
var onError    = require('../lib/onError');
var gulp       = require('gulp');
var del        = require('del');
var sourcemaps = require('gulp-sourcemaps');
var rename     = require('gulp-rename');
var browserify = require('browserify');
var babelify   = require('babelify');
var watchify   = require('watchify');
// var uglifyify  = require('uglifyify');
var uglify     = require('gulp-uglify');
var source     = require('vinyl-source-stream');
var seq        = require('run-sequence');
var buffer     = require('vinyl-buffer');
var stripDebug = require('gulp-strip-debug');

var bundler;

var build = function(watch) {
	bundler = browserify({
		cache        : {},
		packageCache : {},
		entries      : config.src,
		debug        : watch
	});

  bundler.transform(babelify);

	if (watch)
		bundler.plugin(watchify);
	// else
	// 	bundler.transform(uglifyify, {global : true});

	bundler.on('update', function() {
		seq('browserify:del', 'browserify:bundle', 'reload');
	});

	return seq('browserify:del', 'browserify:bundle');
};

gulp.task('browserify:bundle', function () {
	return bundler.bundle()
		.on('error', onError)
		.pipe(source('bundle.js'))
		.pipe(buffer())
		// .pipe(stripDebug())
		.pipe(rename(config.id + '.js'))
		.pipe(gulp.dest(config.dist));
});

gulp.task('browserify', function () {
	return build(false);
});

gulp.task('browserify:watch', function () {
	return build(true);
});

gulp.task('browserify:del', function() {
	return del.sync(config.dist + '/*.js');
});
