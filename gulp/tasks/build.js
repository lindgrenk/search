var config = require('../config.json').watch;
var gulp   = require('gulp');
var seq    = require('run-sequence');

gulp.task('build', function() {
	seq('svg', 'less', 'browserify');
});

gulp.task('heroku:production', ['build']);
