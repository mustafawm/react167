const {resolve} = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = () => ({
  mode: 'production',
  devtool: 'cheap-source-map',

  entry: {
    app: ['./src/main.js'],
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Common: resolve(__dirname, 'src/common'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
      },
    ],
  },

  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
