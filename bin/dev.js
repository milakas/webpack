const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

// Create a webpack compiler using the configuration
const compiler = webpack(webpackConfig);

// Run the compiler once
compiler.run((err) => {
  if (err) {
    console.log('Compilation failed:', err);
  }

  // Watch for changes and recompile on the fly
  compiler.watch({}, (err) => {
    if (err) {
      console.log('Compilation failed:', err);
    }
    console.log('Compiled successfully');
  });

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client'),
    ],
  });
});
