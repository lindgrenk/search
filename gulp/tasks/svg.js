var config  = require('../config.json').svg;
var onError = require('../lib/onError');
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var svg     = require('gulp-svgstore');
var svgmin  = require('gulp-svgmin');
var rename  = require('gulp-rename');

gulp.task('svg', function() {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler: onError}))
		.pipe(svgmin())
		.pipe(gulp.dest(config.dist))
		.pipe(svg({inlineSvg: true}))
		.pipe(rename(config.id + '.svg'))
		.pipe(gulp.dest(config.dist + '/sprite'));
});
