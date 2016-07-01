/// <binding BeforeBuild='prod-build' ProjectOpened='default' />
var gulp        = require('gulp');
// var sass        = require('gulp-sass');
// var jade        = require('gulp-jade');
var ts          = require('gulp-typescript');
var electron = require('electron-connect').server.create();

// var sourcemaps  = require('gulp-sourcemaps');
// var concat      = require('gulp-concat');

var startpaths = {
  electron: './main.js',
  js: './app/*.ts',
  scss: './frontend/scss/**/*.scss',
  assets: './frontend/assets/**/*'
}

var endpaths = {
  js: './public/js/',
  html:'./public/',
  css: './public/css/',
  assets: './public/assets/'
}

gulp.task('typeScript', function () {
  return gulp.src('./app/**/*.ts')
    .pipe(ts({
      "target": "es5",
      "module": "commonjs",
      "moduleResolution": "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "removeComments": false,
      "noImplicitAny": true,
      "suppressImplicitAnyIndexErrors": true
    }))
    .pipe(gulp.dest('./app'));
});


// gulp.task('sass', function () {
//   return gulp.src(startpaths.scss)
//     .pipe(sourcemaps.init())
//   .pipe(sass({
//     style: 'expanded',
//   }))
//   .pipe(sourcemaps.write('.'))
//   .pipe(gulp.dest(prod.css))
// });
//
// gulp.task('templates', function () {
//   return gulp.src(startpaths.templates)
//   .pipe(jade({
//     pretty:true
//   }))
//   .pipe(gulp.dest(prod.html))
// });


// gulp.task('default', ['sass','typeScript','prod-templates'], function () {
//     gulp.watch(startpaths.scss, ['prod-build']);
//     gulp.watch(startpaths.jsWatch, ['prod-build']);
//     gulp.watch(startpaths.templates,['prod-build']);
// });

gulp.task('default', function () {
  electron.start();
  // Restart browser process
   gulp.watch(startpaths.electron, electron.restart);

   // Reload renderer process
   gulp.watch([startpaths.js, 'index.html'], electron.reload);
});
