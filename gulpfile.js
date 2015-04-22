var gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

var paths = {
  scripts: ['src/lib/dragula.js/dist/dragula.js', 'src/angular-dragula.js']
};

gulp.task('jshint', function(){
  return gulp.src(paths.scripts)
    .pipe($.jshint())
    .pipe($.jshint({reporter: 'jshint-stylish'}))
    .pipe($.notify({message: 'Linting Completed'}));
});

gulp.task('concat', function(){
  return gulp.src(paths.scripts)
    .pipe($.concat('angular-dragula.js'))
    .pipe(gulp.dest('dist/'))
    .pipe($.notify({message: 'Done Concating'}));
});

gulp.task('default', ['jshint', 'concat']);

gulp.task('watch', function(){
  $.watch(paths.scripts, ['default']);
});

