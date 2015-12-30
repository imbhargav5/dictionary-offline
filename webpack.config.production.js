var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, 'static');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const sassLoaders = [
  'style-loader',
  'css-loader?modules',
  'postcss-loader',
  'sass-loader?sourceMap?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, '')
];
module.exports = {
    entry :  {
        bundle : './app/client/main.js',
        vendor :['react','lodash','react-dom']
    },
    output: {
        filename: '[name].js', //
        path: assetsPath
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['babel'],
                include: [path.resolve(__dirname, "app")]
           }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(...sassLoaders)
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool : 'eval',
    
    plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js'),
    new ExtractTextPlugin("style.css")
  ]

};