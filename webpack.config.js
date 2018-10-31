const {resolve} = require('path');
const webpack = require('webpack');

const portNo = process.env.PORT || 5050;
let commonOpts = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: ['react', 'react-dom'],
    app: './src/main.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    hot: true,
    stats: {
      all: false,
      assets: true,
      builtAt: true,
      chunks: true,
      colors: true,
      errors: true,
      chunkOrigins: false,
    },
    host: '0.0.0.0',
    port: portNo,
    public: `localhost:${portNo}`,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    headers: {'Access-Control-Allow-Origin': '*'},
  },
};

module.exports = (env, argv = {}) => {
  const isProd = argv.mode === 'production';

  if (isProd) {
    commonOpts = {
      ...commonOpts,
      devtool: 'none',
      entry: {
        app: './src/main.js',
      },
      plugins: [],
      devServer: {},
    };
  }

  return {
    ...commonOpts,

    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },

    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        shared: resolve(__dirname, 'src/shared'),
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
          exclude: /\.module\.css$/,
          use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
        },
        {
          test: /\.module\.css$/,
          use: [
            {loader: 'style-loader'},
            {
              loader: 'css-loader',
              options: {
                camelCase: true,
                modules: true,
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
          use: 'file-loader',
        },
      ],
    },
  };
};
