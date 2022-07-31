const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const envFile = './.env'

module.exports = {
  entry: {
    app: './src/main/index.tsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundles/[name].[contenthash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    }],
  },
  devServer: {
    static: './public',
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true
    }
  },
  optimization: {
    minimizer: [
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new Dotenv({
      path: envFile,
      safe: true,
      systemvars: true
    }),
  ]
}