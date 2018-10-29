const {resolve} = require('path');
const webpack = require('webpack');

const portNo = process.env.PORT || 5050;

module.exports = () => ({
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  entry: {
    vendor: ['react', 'react-dom'],
    app: './src/main.js',
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: `http://localhost:${portNo}/`,
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
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: ['eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  devServer: {
    hot: true,
    stats: 'minimal',
    host: '0.0.0.0',
    port: portNo,
    public: `localhost:${portNo}`,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    headers: {'Access-Control-Allow-Origin': '*'},
  },
});
