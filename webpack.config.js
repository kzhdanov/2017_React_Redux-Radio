var path = require('path');
var webpack = require('webpack');

module.exports = {
    /*
    devServer: {
        inline: true,
        contentBase: './public/views',
        port: 3000
    },
    */
    devtool: 'cheap-module-eval-source-map',
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
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
