const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (noting, argv) => {
  console.log(`mode = ${argv.mode}`);
  const isProduction = argv.mode === 'production';

  let plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Invitation from co',
      filename: 'index.html',
      template: `${__dirname}/public/index.html`,
      chunks: ['invitation', 'common']
    }),
    new CopyWebpackPlugin([
      { from: 'public/favicon.ico', to: 'public/favicon.ico' },
    ]),
  ];

  if (isProduction) {
    plugins.push(new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
    }));
  } else {
    // dev plugins here
  }

  return {
    mode: argv.mode,
    devtool: isProduction ? '' : 'cheap-module-eval-source-map',
    entry: {
      'invitation': './src/pages/invitation/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction
                ? '[name]/[name].[chunkhash:8].js'
                : '[name]/[name].bundle.js',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      }
    },
    module: {
      rules: [{
        test: /\.js|\.jsx$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ]
          }
        }]
      },{
        test: /\.scss|\.css$/,
        use: [
          isProduction ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: '../'
            }
          } : "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }]
    },
    devServer: {
      port: 9000,
      hot: true
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: 'common',
      },
    },
    plugins,
  }
}
