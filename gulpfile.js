var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            basedir: './',
            index: './index.html'
        }
    });
});


gulp.task('sass', function () {
    return gulp
        .src('app/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app'))
    ;
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.scss', ['sass']);
});