var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './main.js',
  output: {
    path:'./',
    filename: 'bundle.js'
  },
  devServer: {
    inline:true,
    port:3000
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ],
  module: {
    loaders: [
      {
        loader: ExtractTextPlugin.extract('css!sass'),
        test: /\.scss$/
      },
    ]
  }
};
