var gulp = require('gulp');
var gutil = require('gulp-util');
var sftp = require('gulp-sftp');

// config
var config = require('./config.js');
var deployConf = require('./deploy-config.js');

gutil.log(gutil.colors.green('Starting to Gulp! Please wait...'));

gulp.task('deploy', function() {
  return gulp.src([config.webpack.path.pub + '/**']).pipe(sftp(deployConf));
});
