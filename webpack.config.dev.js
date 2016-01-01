var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, 'static');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

const sassLoaders = [
  'style-loader',
  'css-loader?modules',
  'postcss-loader',
  'sass-loader?sourceMap?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, '')
];
module.exports = {
    entry :  {
        devbundle : [   'webpack/hot/dev-server',
                    'webpack-hot-middleware/client',
                    './app/client/main.js'],
        devvendor :['react','lodash','react-dom']
    },
    output: {
        filename: '[name].js', //
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
                loader: ExtractTextPlugin.extract('style','css?modules!postcss!sass')


            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool : 'eval',
    
    plugins: [
    new webpack.optimize.CommonsChunkPlugin('devvendor','devvendor.js'),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("devstyle.css"),
    new CopyWebpackPlugin([{from:'assets'}])

  ]

};