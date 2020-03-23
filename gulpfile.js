const gulp = require('gulp');
const sass = require('gulp-sass');
const jsbeautify = require('gulp-jsbeautifier');


sass.compiler = require('node-sass');

gulp.task('scss', () => gulp
	.src('./src/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(jsbeautify({ indent_char: '\t', }))
	.pipe(gulp.dest('./assets/css'))
);
gulp.task('default', () => {
	gulp.watch('./src/*.scss', gulp.parallel('scss'));
});
