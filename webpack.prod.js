const {resolve} = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = (env, argv) => {
  const destPath = resolve(__dirname, '../../../../public/js/hfc-services');

  return {
    mode: 'production',
    devtool: 'cheap-source-map',

    entry: {
      reportsApp: ['./src/dashboard/main.js'],
    },

    output: {
      path: `${destPath}/dist`,
      filename: '[name].[chunkhash].js',
    },

    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        Common: resolve(__dirname, 'src/common'),
        Dashboard: resolve(__dirname, 'src/dashboard'),
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
      new CleanWebpackPlugin(['dist/*.js'], {
        root: destPath,
        verbose: true,
        dry: false,
      }),
      new WebpackAssetsManifest({
        // Options go here
      }),
    ],
  };
};
