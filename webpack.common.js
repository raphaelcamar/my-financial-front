const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DashboardPlugin = require("webpack-dashboard/plugin");

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
      '@': path.join(__dirname, 'src'),
      react: path.resolve('./node_modules/react')
    }
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x?)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
  },
  devServer: {
    static: './public',
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true
    }
  },
  optimization: {
    runtimeChunk: true,
    minimize: true,
    emitOnErrors: true,
    innerGraph: false,
    mangleExports: 'size',
    mangleWasmImports: true,
    moduleIds: 'named'
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
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
    new webpack.HotModuleReplacementPlugin({}),
    new Dotenv({
      path: envFile,
      safe: true,
      systemvars: true
    }),
    new BundleAnalyzerPlugin(),
    new DashboardPlugin()
  ]
}