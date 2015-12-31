require("babel-polyfill");
import express from 'express';
import RouteHandler from './app/routes/index';
import http from 'http';
import https from 'https';
import fs from 'fs';
import config from './app/config';

//import DebugMiddleware from './app/middleware/debug';

let app = express();

console.log(process.env.NODE_ENV);

app.use(express.static('static'));
app.set('view engine','jade');
app.set('views','./app/views');
RouteHandler(app);







//DebugMiddleware(app);

if(process.env.NODE_ENV !=='production'){
	
	var httpServer = http.createServer(app);
	httpServer.listen(3000);
}else{
	let credentials = {
		cert : fs.readFileSync(config.SSL_CERT);
	}
	var httpsServer = https.createServer(credentials, app);
	httpsServer.listen(80);
}
