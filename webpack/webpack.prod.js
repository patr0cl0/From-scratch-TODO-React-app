const merge = require('webpack-merge');
const path = require('path');

const commonWebpackConfig = require('./webpack.common');

module.exports = merge(commonWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[contentHash].js',
  },
});

