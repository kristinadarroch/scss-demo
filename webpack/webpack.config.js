const path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports =  {
  entry: ['./assets/js/index.js', './assets/scss/styles.scss' ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'assets')
  },
  devtool: 'source-map',
   devServer: {
     contentBase: './assets'
   },
  plugins: [

  new ExtractTextPlugin({
  filename:"css/styles.css",
  disable: process.env.NODE_ENV === "development"})
  // ,
  //   new webpack.ProvidePlugin({
  //       $: 'jquery',
  //       jQuery: 'jquery',
  //       'window.jQuery': 'jquery'
  //   })
  ],
  module: {
        rules: [
          {  //process JS files
              test: /\.js$/,
              exclude: '/node_modules/',
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          },
          {  //process SCSS files
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
            fallback: "style-loader",
              use: ["css-loader", "sass-loader"]
            })
          },
          {  //process and move and FONTS
             test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
             use: [
               'file-loader?name=/css/fonts/[name].[ext]'
             ]
          }
        ]
    }

};
