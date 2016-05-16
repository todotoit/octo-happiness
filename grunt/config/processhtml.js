'use strict';

var path = require('path');

module.exports = function (grunt, options) {

  // this is the grunt configuration object
  return {

  options: {
      commentMarker: 'process',
      recursive:true,
      data:options,
      includeBase: options.folders.dist
    },
    single:{
      dest: path.join(options.folders.dist, 'index.html'),
      src:  [ path.join(options.folders.dist, 'index.html') ]
    },
    multi:{
      expand: true,
      cwd: options.folders.dist,
      src: ['*.html', '**/*.html'], 
      dest: options.folders.dist
    }
  }

};

