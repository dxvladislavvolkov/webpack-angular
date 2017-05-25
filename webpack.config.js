var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: './main',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    alias: {},
    extensions: ['.ts', '.js', '.json']
  },
  module: {

    rules: [
       {
        test: /\.ts$/,
        loader: 
          'awesome-typescript-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
            { test: /\.css$/, use: [{loader: "style-loader!css-loader", options: {
    sourceMap: true,
    convertToAbsoluteUrls: true
  } }] },
            { test: /\.scss$/, use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }] }, 
            {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
             loader: 'file-loader'} 
    ]
  }
};
