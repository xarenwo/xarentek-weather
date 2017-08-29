var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: APP_DIR + '/app.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            //aliases here
        },
        extensions: ['', '.js', '.jsx']
    },
    module : {
        loaders : [
            {
                test : /\.jsx?$/,
                include : APP_DIR,
                exclude: /(node_modules|bower_components)/,
                loader : 'babel-loader'
            }
        ]
    }
};

module.exports = config;