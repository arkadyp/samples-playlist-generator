var webpack = require('webpack');

var config = {
  context: __dirname + '/src',
  entry: {
    app: './server/index.js',
  },
  output: {
    path: __dirname + '/dist',
    publicPath: "/assets/",
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [ "babel-preset-es2015" ].map(require.resolve)
        }
      }
    ]
  },
  // node: {
  //   console: 'empty',
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty'
  // },
  externals: {
    fs: '{}',
    tls: '{}',
    net: '{}',
    console: '{}'
  },
  target: 'node',
};

module.exports = config;