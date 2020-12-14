const currentTask = process.env.npm_lifecycle_event; // e.g. dev, build
const path = require('path');
const minCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

const config = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true  // hot module reload - browser does not even refresh by enabling this.
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,   // apply to file with extension .js
        exclude: /(node_modules)/,   // exclude node modules
        use: {
          loader: "babel-loader", // use babel loader
          options: {
            presets: [
              ['@babel/preset-env', { "useBuiltIns": "usage", "corejs": 3, "targets": "defaults" }],
              '@babel/preset-react'
            ]  // babel transpiler presets for javascript and react
          }
        }
      }
    ]
  },
  mode: 'development'
};

if (currentTask === 'build') {
  config.mode = "production";
  config.module.rules[0].use[0] = minCssExtractPlugin.loader;
  config.plugins.push(
      new minCssExtractPlugin({filename: 'main.[hash].css'}),
      new CleanWebpackPlugin(),
      new WebpackManifestPlugin()
    );
}

module.exports = config;