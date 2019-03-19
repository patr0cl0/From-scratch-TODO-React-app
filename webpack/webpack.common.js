const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'public/index.html',
  filename: 'index.html',
});

module.exports = {
  entry: './src/index.js',
  plugins: [htmlWebpackPluginConfig],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
};
