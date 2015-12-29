'use strict'

/**
 * Why not use the restart event, you may ask.
 *
 * The http server might not have started listening yet when
 * the `restart` event has been triggered. It's best to check
 * whether it is already listening for connections or not.
 */


var gulp = require('gulp')
var livereload = require('gulp-livereload')
var nodemon = require('gulp-nodemon');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var frontendConfig = require('./webpack.config.js');


gulp.task('frontend-watch', function() {
  //webpack(frontendConfig).watch(100, onBuild());

  new WebpackDevServer(webpack(frontendConfig), {
    publicPath: frontendConfig.output.publicPath,
    hot: true,
    stats: { colors: true, progress:true }
  }).listen(2000, 'localhost', function (err, result) {
    if(err) {
      console.log(err);
    }
    else {
      console.log('webpack dev server listening at localhost:2000');
    }
  });

});


gulp.task('backend-watch', function() {
  livereload.listen();

  console.log('starting nodemon');


  nodemon({
    script: 'index.js',
    stdout: true,
    exec : 'babel-node --'
  }).on('readable', function() {

    this.stdout.on('data', function(chunk) {
      console.log('data');
      console.log(chunk);
      console.log(/^listening/.test(chunk));

      if (/listening/.test(chunk)) {
        console.log('reloading');
        livereload.reload();
      }
      process.stdout.write(chunk)
    })
  })
});

