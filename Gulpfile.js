var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('ts', () => (
	tsProject.src()
		.pipe(tsProject())
		.js
		.pipe(gulp.dest('dist'))
));

gulp.task('default', () => {
	gulp.run('ts');
	gulp.watch('src/**/*.ts', () => {
		gulp.run('ts');
	});
});