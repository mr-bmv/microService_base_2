// Требуются для совместного использования с webpack.common.js
const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')
const packageJSON = require('../package.json')

// захватываем домейн, где на проде запустилось приложение
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        // в продакшене мы не знаем где запускаются дочерние проекты
        // marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJSON.dependencies,
    }),
  ]
}

// для совместного использования с webpack.common.js
module.exports = merge(commonConfig, prodConfig)