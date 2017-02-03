var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + "/client/main.js",
  output: {
    path: __dirname + "/build",
    filename: "[name].js"
  },

  devtool: 'eval-source-map',

  devServer: {
    contentBase: './build',
    historyApiFallback: false,
    hot: true,
    inline: true,
    port: 8080
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }

    ]
  },

  resolve: {
      extensions: [ '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      // template: __dirname + "/client/tmpl/index.tmpl.html"
      title: 'My first react app'
    })
  ]
}