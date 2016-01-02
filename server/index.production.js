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
var useragent = require('express-useragent');

let app = express();
// Redirect all HTTP traffic to HTTPS
function ensureSecure(req, res, next){
   // handle port numbers if you need non defaults
};


app.use(compress());
app.use(useragent.express());
app.use(express.static('static'));
app.use((req,res,next)=>{
if(req.useragent.browser==='Chrome' && parseInt(req.useragent.version)>43){
if(req.secure){
     console.log(req.useragent.browser, req.useragent.version, parseInt(req.useragent.version)); 
     console.log("Secure within chrome ");
     // OK, continue
    return next();
  }
 else{
  console.log("insecure within chrome "+req.hostname,req.url);
  console.log("redirecting");
 res.redirect('https://'+req.hostname+req.url);
 }
}else{
  console.log('not chrome, hence next()');
  next();
}
});
app.set('view engine','jade');
app.set('views','./app/views');



RouteHandler(app);

var privateKey  = fs.readFileSync(config.SSL_KEY, 'utf8');
var certificate = fs.readFileSync(config.SSL_CERT, 'utf8');
var chainFile = fs.readFileSync(config.SSL_CHAIN,'utf8');
var credentials = {key: privateKey, cert: certificate,chain:chainFile};
var httpServer = http.createServer(app);
httpServer.listen(3000);
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(443);
console.log(process.env.NODE_ENV + " server running at "+ 3000 + "  and IP forwarded to " + 80 +" with SSL " +443);
  
