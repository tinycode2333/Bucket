var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: __dirname + "/client/main.js",
    adm: __dirname + "/client/adm.js",
    vendors: ['jquery']
  },

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
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'url-loader?limit=8192&name=img/[name].[ext]'
      },
      // {
      //   test: /\.scss$/,
      //   loaders: ['style-loader', 'css-loader', 'sass-loader']
      // },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules!postcss-loader'
      },
    ]
  },

  resolve: {
      extensions: [ '.js', '.jsx']
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),

    new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),

    new HtmlWebpackPlugin({
      title: 'Hello index',
      template: __dirname + "/client/tmpl/main.tmpl.html",
      filename: 'index.html',
      chunks: ['main', 'vendors'],
      inject: 'body'
    }),

    new HtmlWebpackPlugin({
      title: 'Hello adm',
      template: __dirname + "/client/tmpl/adm.tmpl.html",
      filename: 'adm.html',
      chunks: ['adm', 'vendors'],
      inject: 'body'
    })

  ]
}