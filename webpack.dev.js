const {resolve} = require('path');
const webpack = require('webpack');

const portNo = process.env.PORT || 5050;
const watchPoll = process.env.WATCH_POLL || 2500;
const isDocker = Boolean(process.env.DOCKER_COMPOSE);

const devServerOpts = isDocker
  ? {
      watchOptions: {
        aggregateTimeout: 500,
        poll: watchPoll,
        ignored: /node_modules/,
      },
      index: '', // specify to enable root proxying
      proxy: {
        context: () => true,
        target: process.env.END_POINT,
        secure: false,
      },
    }
  : {watchOptions: {poll: watchPoll}};

module.exports = () => ({
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  entry: {
    vendor: ['react', 'react-dom', 'moment'],
    app: ['./src/main.js'],
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
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: portNo,
    inline: true,
    public: `localhost:${portNo}`,
    contentBase: resolve(__dirname, 'dist'),
    headers: {'Access-Control-Allow-Origin': '*'},
    ...devServerOpts,
  },
});
