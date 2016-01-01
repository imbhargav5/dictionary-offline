import express from 'express';
import RouteHandler from '../app/routes/index';
import http from 'http';
import fs from 'fs';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

//import DebugMiddleware from './app/middleware/debug';

let app = express();
let config = require('../webpack.config.dev');
let compiler = webpack(config)


console.log(process.env.NODE_ENV);



app.use(express.static('static'));
app.set('view engine','jade');
app.set('views','./app/views');


RouteHandler(app);



app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

var httpServer = http.createServer(app);
httpServer.listen(3000);
console.log(3000);
