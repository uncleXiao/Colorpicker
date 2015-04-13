/*������Ҫ�õ��Ĳ����ִ��npm install���Զ���װ*/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');

/*ִ��һ��gulp��Ĭ�ϻ������������:ѹ��js��css��html*/
gulp.task('default', ['js', 'css', 'html'], function () {
  console.log("compiled!");
});

gulp.task('js', function () {
  gulp.src('www/js/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('www/js'));
});

gulp.task('css', function () {
  gulp.src('www/css/**/*.css')
      .pipe(minifycss({keepBreaks: true}))
      .pipe(gulp.dest('www/css'))
});


gulp.task('html', function () {
  gulp.src('www/templates/**/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('www/templates'));
});