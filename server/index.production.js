import express from 'express';
import RouteHandler from '../app/routes/index';
import http from 'http';
import https from 'https';
import fs from 'fs';
import config from '../app/config/index';
/**
 * Gzip compression module
 */
import compress from 'compression';

let app = express();

app.use(compress());
app.use(express.static('static'));
app.set('view engine','jade');
app.set('views','./app/views');
app.all('*', ensureSecure);

RouteHandler(app);

// Redirect all HTTP traffic to HTTPS
function ensureSecure(req, res, next){
   console.log(req.hostname,req.url);
  if(req.headers["x-forwarded-proto"]){
    // OK, continue
    return next();
  };
  console.log(req.hostname,req.url);
  res.redirect('https://'+req.hostname+req.url); // handle port numbers if you need non defaults
  next();
};


var privateKey  = fs.readFileSync(config.SSL_KEY, 'utf8');
var certificate = fs.readFileSync(config.SSL_CERT, 'utf8');
var credentials = {key: privateKey, cert: certificate};
var httpServer = http.createServer(app);
httpServer.listen(3000);
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(443);
console.log(process.env.NODE_ENV + " server running at "+ 3000 + "  and IP forwarded to " + 80 +" with SSL " +443);
  
