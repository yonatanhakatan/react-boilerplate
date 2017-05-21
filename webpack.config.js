const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './assets/react/app.js'],
  output: {
    path: path.resolve(__dirname, 'public/_build/'),
    publicPath: '/_build/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'public',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'assets'),
        use: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader',
          }],
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5',
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        include: path.join(__dirname, 'assets/react'),
        loaders: ['eslint-loader'],
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'assets/react'),
        loaders: ['babel-loader?cacheDirectory'],
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader' },
      { test: /\.(woff|woff2)$/, use: 'file-loader?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+.\d+.\d+)?$/, use: 'file-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+.\d+.\d+)?$/, use: 'file-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(jpe?g|png|gif)$/i, use: 'file-loader' },
      { test: /\.ico$/, use: 'file-loader?name=[name].[ext]' },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true,
    }),
    new StyleLintPlugin({
      files: ['**/*.s?(a|c)ss'],
      syntax: 'scss',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer('last 2 versions'),
          pxtorem(),
        ],
      },
    }),
  ],
  watchOptions: {
    poll: true,
  },
};
