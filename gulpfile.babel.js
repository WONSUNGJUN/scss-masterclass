import gulp from 'gulp';
// import ghtml from 'gulp-html-import';
// import gfileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import del from 'del';
// import sass from 'gulp-sass';
import minify from 'gulp-csso';
import autoprefixer from 'gulp-autoprefixer';
import ws from 'gulp-webserver';
import gimage from 'gulp-image';
import ghPages from 'gulp-gh-pages';

const sass = require('gulp-sass')(require('node-sass'));

const routes = {
  html: {
    watch: 'src/html/*.html',
    src: 'src/html/*.html',
    dest: 'build',
  },
  img: {
    src: 'src/img/*',
    dest: 'build/img',
  },
  scss: {
    watch: 'src/scss/*.scss',
    src: 'src/scss/*.scss',
    dest: 'build/css',
  },
};

const html = () =>
  gulp
    .src(routes.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(routes.html.dest));

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

const images = () =>
  gulp.src(routes.img.src).pipe(gimage()).pipe(gulp.dest(routes.img.dest));

const ghDeploy = () => gulp.src('build/**/*').pipe(ghPages());

const watch = () => gulp.watch(routes.html.watch, html);
gulp.watch(routes.scss.watch, styles);

const clean = () => del(['build/', '.publish']);

const webserver = () => gulp.src('build').pipe(ws({ livereload: true }));

const prepare = gulp.series([clean, images]);

const assets = gulp.parallel([html, styles]);

const live = gulp.parallel([webserver, watch]);

export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);
export const deploy = gulp.series([build, ghDeploy]);
