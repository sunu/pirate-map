const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  }
}