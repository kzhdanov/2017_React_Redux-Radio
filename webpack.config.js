var path = require('path');
var webpack = require('webpack');
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    /*
    devServer: {
        inline: true,
        contentBase: './public/views',
        port: 3000
    },
    */
    //devtool: 'cheap-module-eval-source-map',
    devtool: 'source-map',
    entry: './public/dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
        ]
    },
    output: {
        path: 'public',
        filename: 'build/js/bundle.min.js'
    },
    plugins: [
        //new BundleAnalyzerPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
        /*
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
                drop_debugger: true,
                conditionals: true,
                evaluate: true,
                //drop_console: true,
                sequences: true,
                booleans: true,
            }
        })
        */
    ]
};
