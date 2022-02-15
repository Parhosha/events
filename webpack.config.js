const path = require('path');
const webpack = require('webpack');
const { SourceMapDevToolPlugin } = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
require('dotenv').config({ path: './.env' }); 


module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, './src/index.js')],
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                indentedSyntax: true
              },
            },
          }]
        }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    sourceMapFilename: "[name].js.map",
  },
  devtool: "source-map",
  plugins: [new HtmlWebpackPlugin({      
    template: path.join(__dirname, "src", "index.html"),
  }), new webpack.HotModuleReplacementPlugin(), new SourceMapDevToolPlugin({
    filename: "[file].map"
  }),     new Dotenv({"process.env": JSON.stringify(process.env)})],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    hot: true,
  },
};
