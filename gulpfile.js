
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var ts          = require('gulp-typescript');
var electron = require('electron-connect').server.create();

// var sourcemaps  = require('gulp-sourcemaps');
// var concat      = require('gulp-concat');

var startpaths = {
  electron: './main.js',
  js: './app/*.ts',
  scss: './frontend/scss/**/*.scss',
  templates: './frontend/views/**/*.jade'
}

var endpaths = {
  js: './public/js/',
  html:'./public/views/',
  css: './public/css/',
  assets: './public/assets/'
}

gulp.task('typescript', function () {
  var tsProject = ts.createProject('./tsconfig.json');
  var tsc = tsProject.src().pipe(ts({
    "experimentalDecorators": true
  }))
  return tsc;
});


gulp.task('sass', function () {
  return gulp.src(startpaths.scss)
  .pipe(sass({
    style: 'expanded',
  }))
  .pipe(gulp.dest(endpaths.css))
});
//
gulp.task('templates', function () {
  return gulp.src(startpaths.templates)
  .pipe(jade({
    pretty:true
  }))
  .pipe(gulp.dest(endpaths.html))
});

gulp.task('reload',['sass','templates','typescript'], function () {
  electron.reload()
});


gulp.task('restart',['sass','templates','typescript'], function () {
  electron.restart()
});

gulp.task('default',['sass','templates','typescript'], function () {

   electron.start();
  // Restart browser process
   gulp.watch(startpaths.electron, ['restart']);
   // Reload renderer process
   gulp.watch([startpaths.scss,startpaths.templates,startpaths.js,'index.html'],['restart']);
});
