const webpack = require('webpack');
module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: __dirname + "/public",
        publicPath: '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            }
        ]
    }
};