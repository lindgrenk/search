var config       = require('../config.json').less;
var onError      = require('../lib/onError');
var gulp         = require('gulp');
var clean        = require('del');
var plumber      = require('gulp-plumber');
var less         = require('gulp-less');
var minifycss    = require('gulp-cssmin');
var sourcemaps   = require('gulp-sourcemaps');
var lessGlob     = require('less-plugin-glob');
var autoprefixer = require('gulp-autoprefixer');
var cache        = require('gulp-cached');
var remember     = require('gulp-remember');

gulp.task('less-clean', function() {
	return clean(config.dist + '/*.css');
});

gulp.task('less', ['less-clean'], function() {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler: onError}))
		.pipe(sourcemaps.init())
			.pipe(less({plugins: [lessGlob]}))
			.pipe(autoprefixer())
			.pipe(minifycss({noAdvanced: true}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.dist));
});

gulp.task('less-dev', ['less-clean'], function() {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler: onError}))
		.pipe(sourcemaps.init())
			// .pipe(cache('less'))
				.pipe(less({plugins: [lessGlob]}))
				.pipe(autoprefixer())
			// .pipe(remember('less'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.dist));
});
