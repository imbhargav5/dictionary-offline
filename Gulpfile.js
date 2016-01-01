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
var frontendProductionConfig = require('./webpack.config.production.js');





gulp.task('build',function(){
   var compiler = webpack(frontendProductionConfig);
   compiler.run((err,stats)=>{
        if(err)
            return console.warn(err);
        var jsonStats = stats.toJson({colors:true});
        if(jsonStats.errors.length > 0)
            return console.warn(jsonStats.errors);
        if(jsonStats.warnings.length > 0)
            console.warn(jsonStats.warnings);
         console.log(stats.toString({colors:true}));
        });
});

gulp.task('production', ['build'], function() {
 
  nodemon({
    script: 'index.js',
    stdout: true,
    exec : 'babel-node --presets es2015,stage-3 --'
  }).on('readable', function() {

    this.stdout.on('data', function(chunk) {
      process.stdout.write(chunk)
    });
  })
});

/**
gulp.task('watch',['backend-watch','frontend-watch'],function(){
  console.log('watching');
});
**/

gulp.task('watch',function(){
  livereload.listen();
  /**
   * Run Nodemon
    */
  nodemon({
    script: 'index.js',
    stdout: true,
    exec : 'babel-node --presets es2015,stage-3 --'
  }).on('readable', function() {
      console.log('watching');
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
  });
});


