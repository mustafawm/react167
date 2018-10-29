const {resolve} = require('path');

module.exports = () => ({
  mode: 'production',

  entry: {
    app: './src/main.js',
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
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
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
      },
    ],
  },

  plugins: [],
});
