import gulp from 'gulp';
import ghtml from 'gulp-html-import';
import del from 'del';
// import sass from 'gulp-sass';
import minify from 'gulp-csso';
import autoprefixer from 'gulp-autoprefixer';

const sass = require('gulp-sass')(require('node-sass'));

const routes = {
  html: {
    watch: 'src/*.html',
    src: 'src/index.html',
    dest: 'build',
  },
  img: {
    watch: 'src/img/*',
    dest: 'build/img',
  },
  scss: {
    watch: 'src/scss/*.scss',
    src: 'src/scss/styles.scss',
    dest: 'build/css',
  },
};

const html = () => {
  gulp.src(routes.pug.src).pipe(ghtml()).pipe(gulp.dest(routes.html.dest));
};

const styles = () =>
  gulp
    .src(routes.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: 'autoplace',
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.scss.dest));

const img = () =>
  gulp.src(routes.img.src).pipe(image()).pipe(gulp.dest(routes.img.dest));

const watch = () => {
  gulp.watch(routes.html.watch, html);
  gulp.watch(routes.scss.watch, styles);
  gulp.watch(routes.img.watch, img);
};

const clean = () => del(['build/', '.publish']);

const prepare = gulp.series([clean]);

const assets = gulp.series([styles]);

const live = gulp.parallel([watch]);

export const dev = gulp.series([prepare, assets, live]);
