const merge = require('webpack-merge');
const path = require('path');
const CleanWebpack = require('clean-webpack-plugin');

const commonWebpackConfig = require('./webpack.common');

module.exports = merge(commonWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[contentHash].js',
  },
  plugins: [
    new CleanWebpack()
  ]
});

