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
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
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
      title: 'Production'
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