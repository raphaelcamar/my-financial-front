const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CirularDependencyPlugin = require('circular-dependency-plugin')

const envFile = './.env'

module.exports = {
  entry: {
    app: './src/main/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x?)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: './public',
    hot: true,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true
    }
  },
  optimization: {
    runtimeChunk: true
  },
  performance: {
    hints: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/img/favicon.ico'),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new Dotenv({
      path: envFile,
      safe: true,
      systemvars: true
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
    }),
    new CirularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,
      // include specific files based on a RegExp
      include: /src/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
    })
  ]
}