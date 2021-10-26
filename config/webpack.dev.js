const path = require('path')
const webpackBaseConfig = require('./webpack.base')
const {merge} = require('webpack-merge')
const resolve = p => path.resolve(__dirname, p)
const webpackDevConfig = {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        static: {
            directory: resolve('dist')
        },
        compress: true,
        hot: true,
        open: true,
        port: 8080
    }
}
const result = merge(webpackBaseConfig, webpackDevConfig)
module.exports = result
