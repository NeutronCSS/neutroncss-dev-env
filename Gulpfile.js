var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var git = require('gulp-git'); 

// SASS
gulp.task('sass', function() {
    return sass('tests/**/*.scss', {style: 'expanded'})
        // .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./tests/css/'));
});

//Clone Neutron Repos
gulp.task('clone', function(){
	git.clone('https://github.com/NeutronCSS/neutroncss.git', {cwd: "./neutroncss/"});
	git.clone('https://github.com/NeutronCSS/neutron-tests.git', {cwd: "./neutron-tests/"});
});


//SASS Watch task
gulp.task('watch',function() {
    gulp.watch('neutroncss/**/*.scss',['sass']);
    gulp.watch('tests/**/*.scss',['sass']);
});

//Default task
gulp.task('default', ['sass', 'watch']);
