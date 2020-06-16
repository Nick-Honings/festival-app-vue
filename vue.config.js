const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack');

module.exports = {
    runtimeCompiler: true,


    // devServer: {
    //     historyApiFallback: true,
    //     port: 8888,
    //     noInfo: true,
    //     overlay: true
    // }
    configureWebpack: {
        mode: 'development',
        plugins: [
            new BundleAnalyzerPlugin(),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
        ]
    }



};

