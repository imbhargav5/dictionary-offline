import express from 'express';
import RouteHandler from '../app/routes/index';
import http from 'http';
import https from 'https';
import fs from 'fs';
import config from '../app/config/index';

//import DebugMiddleware from './app/middleware/debug';

let app = express();

console.log(process.env.NODE_ENV);

app.use(express.static('static'));
app.set('view engine','jade');
app.set('views','./app/views');
RouteHandler(app);


var privateKey  = fs.readFileSync(config.SSL_KEY, 'utf8');
var certificate = fs.readFileSync(config.SSL_CERT, 'utf8');

var credentials = {key: privateKey, cert: certificate};
var httpServer = http.createServer(app);
httpServer.listen(80);
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(443);
console.log(80,443);
  
