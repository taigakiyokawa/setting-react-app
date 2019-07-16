const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    compress: true,
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};