const merge = require('webpack-merge');

const commonWebpackConfig = require('./webpack.common');

module.exports = merge(commonWebpackConfig, {
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    contentBase: 'public/',
    hot: true
  },
});

