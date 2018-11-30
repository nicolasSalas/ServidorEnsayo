
var gulp = require('gulp'), watch = require('gulp-watch');
var bs = require('browser-sync').create();
var livereload = require('gulp-livereload');
var wiredep = require('gulp-wiredep');
var nodemon = require('nodemon');
var notify = require("gulp-notify");
var htmlreplace = require('gulp-html-replace');

gulp.src("./src/view/home.html")

  .pipe(notify("Thanks Human!"));

gulp.task('serve',['dev'], function() {
  
  nodemon({
    script: 'server.js',
    stdout: false
  }).on('readable', function() {
    this.stdout.on('data', function(chunk) {
      if (/^listening/.test(chunk)) {
        livereload.reload()
    }
    process.stdout.write(chunk)
  })
})

setTimeout(() => {
  bs.init({
    logPrefix: "Server",
    notify: true,
    logConnections: true,
    proxy: "localhost:8085"
});

gulp.watch("./src/view/*.html").on('change', bs.reload);
livereload.listen()
}, 2000);

});

gulp.task('bower', function () {
  gulp.src('./views/index.ejs')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./views/'))
})

gulp.task('production', function() {
  gulp.src('./views/index.ejs')
    .pipe(htmlreplace({
      base: {
        src: 'http://serverprod.us-west-2.elasticbeanstalk.com/',
        tpl: '<!-- build:base --> <base href="%s"> <!-- endbuild -->'
      }
    }))
    .pipe(gulp.dest('./views/'))
});

gulp.task('dev', function() {
  gulp.src('./views/index.ejs')
    .pipe(htmlreplace({
      base: {
        src: 'http://localhost:3000/',
        tpl: '<!-- build:base --> <base href="%s"> <!-- endbuild -->'
      }
    }))
    .pipe(gulp.dest('./views/'))
});
