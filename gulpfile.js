var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

//compilar scss en css

function style(){
    // Dónde está el SCSS?
    return gulp.src('./scss/**/*.scss')
    // Pasar los SCSS por el compilador
    .pipe(sass().on('error', sass.logError))
    // Guardar los CSS compilados en una carpeta
    .pipe(gulp.dest('./css'))
    // Sincronizar con browsers
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;