const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // watch: true,  //watch mode - can use if we are not using webpack devserver
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true  // hot module reload - browser does not even refresh by enabling this.
  },
  mode: "development"  // "production" for production - compress and no debugging
}