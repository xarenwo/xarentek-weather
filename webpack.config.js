module.exports = {
  entry: './app/app.jsx',
  output: {
      path: __dirname,
      filename: './public/bundle.js',
      pathinfo: true
  },
    resolve: {
      root: __dirname,
        alias: {
         //aliases here
        },
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
          {
              loader: 'babel-loader',
              query: {
                  presets: ['react','es2015']
              },
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/
          }
      ]
    }
};