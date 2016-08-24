var config           = require('../config.json').server;
// var styleguideConfig = require('../config.json').styleguide;
var gulp             = require('gulp');
var seq              = require('run-sequence');
var browserSync      = require('browser-sync');

var server    = browserSync.create('server');
// var styleguide = browserSync.create('styleguide');

gulp.task('stream', function() {
	server.stream();
});

gulp.task('reload', function() {
	server.reload({once: true});
});

gulp.task('watch', function() {
	config.watch.forEach(function(chunk) {
		var tasks = chunk.tasks;
		tasks.push('reload');

		gulp.watch(chunk.files, function() { seq.apply(this, tasks); });
	});
});

gulp.task('serve', function() {
	seq('browserify:watch', 'watch', config.proxy ? 'serve:proxy' : 'serve:static');
});

gulp.task('serve:proxy', function() {
	server.init({
		proxy : config.host
	});
});

gulp.task('serve:static', function() {
	server.init({
		open   : false,
		notify : false,
		server : {
			baseDir : ['./']
		}
	});
});
