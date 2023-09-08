// Требуются для совместного использования с webpack.common.js
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: 'products',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './ProductsIndex': './src/bootstrap.js'
    //   },
    //   shared: ['faker']
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

// для совместного использования с webpack.common.js
module.exports = merge(commonConfig, devConfig)