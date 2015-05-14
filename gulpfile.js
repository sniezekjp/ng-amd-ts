var gulp = require('gulp');
var tsc = require('gulp-tsc');
var watch = require('gulp-watch');
var newer = require('gulp-newer');

var tsFiles = [
  'src/**/*.ts', 
  '!src/vendor/**'
];
gulp.task('default', ['copy'], function(){
  gulp.src(tsFiles)
    .pipe(newer('dist'))
    .pipe(tsc({ emitError: false, module: 'amd', target:'ES5' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['default'], function (){
  gulp.watch(tsFiles, ['default']);
});

gulp.task('copy', function (){
  gulp
    .src(['src/index.html', 'src/vendor/**/*', 'src/bootstrap/config.js', '!src/app.d.ts'], {base: './src'})
    .pipe(newer('dist'))
    .pipe(gulp.dest('dist'));
});