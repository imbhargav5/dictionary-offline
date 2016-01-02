var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, 'static');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

const ver = 3;

const sassLoaders = [
  'style-loader',
  'css-loader?modules',
  'postcss-loader',
  'sass-loader?sourceMap?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, '')
];
module.exports = {
    entry :  {
        bundle : [   'webpack/hot/dev-server',
                    'webpack-hot-middleware/client',
                    './app/client/main.js'],
        vendor :['react','lodash','react-dom']
    },
    output: {
        filename: '[name].js?'+ver, //
        path: assetsPath,
        publicPath: 'http://localhost:3000/'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['react-hot','babel'],
                include: [path.resolve(__dirname, "app")]
           }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style','css?modules!autoprefixer!sass')


            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool : 'eval',
    
    plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js'),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css?"+ver),
    new CopyWebpackPlugin([{from:'assets'}])
  ]

};