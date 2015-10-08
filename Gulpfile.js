var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

// SASS
gulp.task('sass', function() {
    return sass('tests/**/*.scss', {style: 'expanded'})
        // .pipe(sass().on('error', sass.logError))
         .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
       .pipe(gulp.dest('./tests/'));
});

//SASS Watch task
gulp.task('watch', ['sass'], function() {
    gulp.watch('neutroncss/**/*.scss',['sass']);
    gulp.watch('tests/**/*.scss',['sass']);
});

//Default task
gulp.task('default', ['watch']);
