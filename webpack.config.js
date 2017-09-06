
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        APP_DIR + '/app.jsx'
    ],
    externals:{
        jquery: 'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery':'jquery'
        })
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        root: APP_DIR,
        alias: {
            Main : "components/Main.jsx",
            Nav : "components/Nav.jsx",
            Weather : "components/Weather.jsx",
            About : "components/About.jsx",
            WeatherForm : "components/WeatherForm.jsx",
            WeatherMessage : "components/WeatherMsg.jsx",
            openWeatherMap : "api/openWeatherMap.jsx"
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