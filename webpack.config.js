var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, 'static');


const sassLoaders = [
  'style-loader',
  'css-loader?modules',
  'postcss-loader',
  'sass-loader?sourceMap?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, '')
];
module.exports = {
    entry :  {
        bundle : [ 'webpack-dev-server/client?http://localhost:2000',
                    'webpack/hot/only-dev-server',
                    './app/client/main.js'],
        vendor :['react','lodash','react-dom']
    },
    output: {
        filename: '[name].js', //
        path: assetsPath,
        publicPath: 'http://localhost:2000/assets/'
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
                loader: sassLoaders.join("!")

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
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]

};