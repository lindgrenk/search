// var gulp = require('gulp');
// var less = require('gulp-less');
// var autoprefixer = require('gulp-autoprefixer');
// var cssmin = require('gulp-cssmin');
// var uglify = require('gulp-uglify');
// var browserSync = require('browser-sync').create();

// gulp.task('less', function () {
// 	return gulp.src('src/less/style.less')
// 		.pipe(less())
// 		.pipe(autoprefixer({
// 			browsers : ['last 2 versions'],
// 			cascade  : false
// 		}))
// 		.pipe(cssmin())
// 		.pipe(gulp.dest('dist/css'))
// 		.pipe(browserSync.stream())
// });

// gulp.task('js', function () {
//   return gulp.src('src/js/main.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'))
// });

// gulp.task('js-watch', ['js'], function(done) {
// 	browserSync.reload();
// 	done();
// })

// gulp.task('default', ['less'], function() {
//     browserSync.init({
//         server: "./",
//         open: false
//     });

//     gulp.watch("src/less/*.less", ['less']);
//     gulp.watch("src/js/*.js", ['js-watch']);
//     gulp.watch("*.html").on('change', browserSync.reload);
// });

// Get all Gulp tasks..
require('require-dir')('./gulp/tasks', {recurse : true});
