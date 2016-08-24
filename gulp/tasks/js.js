var config     = require('../config.json').js;
var onError    = require('../lib/onError');
var gulp       = require('gulp');
var uglify     = require('gulp-uglify');

gulp.task('js', function () {
  return gulp.src('src/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
